# ISR - Incremental Static Regeneration

**LINK RECOMMENDED:** https://github.com/vercel/next.js/discussions/10437#discussioncomment-90459

**LINK DOCS ISR:** https://vercel.com/docs/incremental-static-regeneration

-   SSR - Good, but build-time ONLY

-   CSR - Good for private app

-   SSR - Lastest data as always, performance concerns

-   ISR - SSG + able to generate HTML on demand

**Lưu ý**

-   Khi code NextJS cố gắng né việc dùng SSR, thay vào đó:

    -   Dùng **SSG** cho các **public Page + không dùng đến data**

    -   Dùng **ISR** cho các **public Page có dùng data và có updated từ CMS**

    -   Dùng **SSG + CSR** cho các **Private Page**

## 1. Tổng quan về ISR

-   Giống SSR, nhưng sau khi build có thêm sẵn HTML

-   Ví dụ nếu 1 page có hơn 100,000 products -> SSR build mất khoảng 2 tiếng

-   ISR sẽ generate ra HTML on-demand

## 2. Hướng tiếp cận với ISR

### 2.1. Faster build

-   **Faster build ->** Sẽ chọn ra ~1000 products phổ biến tại lúc build. Nếu user request thêm products khác thì nó sẽ lưu **1000sp trước đấy vào cache** và **tiếp tục generate on-demand HTML các products tiếp theo**: ~1 phút build

### 2.2. Higher Cache Hit Rate

-   **Higher Cache Hit Rate ->** Tạo 10,000 products tại lúc build, đảm bảo lượng products nhiều hơn được lưu vào cache trước khi user request: ~8 phút build

## 3. Cách fetching data với ISR

-   Dùng hàm **getStaticProps** trong page, thêm 1 options **revalidate: 60** -> nó sẽ updated page sau khi page nó generated.

-   **revalidate:** với giá trị tính bằng giây

-   Ví dụ: Tác dụng dùng **revalidate: 60**

    -> Trong thơi điểm page từ 0-60s tạm gọi là v1 -> mọi data vẫn được giữ trong cache
    -> Khi user request lên thì revalidate hoạt động -> revalidate sẽ tạo 1 page mới v2 -> nó sẽ **update cache** chứ chưa view ra UI -> reload lần nữa sẽ ra UI update

**Lưu ý**

-   Dù qua quá 60s mà chưa có request lên thì page vẫn ở nguyên trạng thái ban đầu

**Ví dụ dùng revalidate**

```tsx
// pages/products/[id].js

export async function getStaticProps({ params }) {
    return {
        props: {
            product: await getProductFromDatabase(params.id),
        },
        revalidate: 60,
    };
}
```

## 4. Generating Paths

-   Trường hợp ban đầu build có 1000 products, nhưng user request product thứ 1001 -> Lúc này product thứ 1001 không có sẵn trong cache

-> Khi này dùng **getStaticPaths** với **fallback** có giá trị là **blocking** hoặc **true**

### TH1: **getStaticPaths** với **fallback = 'blocking'**

-> Khi user request lên 1 page mà chưa có trong cache -> Nó sẽ gọi **getStaticProps** NextJS sẽ tạo ra HTML với lần đầu request và return về client - có cache

-> Chỉ cần có 1 request đầu tiên gọi ra -> thì NextJS sẽ tạo với lần đầu đó và lưu vào cache dùng lại được mà không cần tạo lại

-> Có nhược điểm là TTFB hơi bị delay

### TH2: **getStaticPaths** với **fallback = true (khuyên dùng)**

-> Khi user request lên 1 page mà chưa có trong cache -> NextJS sẽ **ngay lập tức** tạo ra HTML với **1 trạng thái loading cho lần đầu request**

-> Sau khi data được loading xong -> page sẽ re-render lại và dùng data mới đó lưu vào cache, sau này cũng không cần request lại

-> Giống với C# ASP.NET có check: **Page.IsPostBack** - NextJS: **router.isFallback**

-> Ban đầu trong Page NextJS có thể check:

```tsx
const router = useRouter();
if (router.isFallback) {
    return <ComponentLoading />;
}
```
