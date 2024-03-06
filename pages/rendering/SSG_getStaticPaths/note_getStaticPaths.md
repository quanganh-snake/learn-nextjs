# SSG with dynamic routes - **getStaticPaths**

**LINK:** https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths

-   Mô tả: Có thể pre-render pages với các paths phụ thuộc vào dữ liệu bên ngoài. Với dữ liệu là 1 list -> các item trong list sẽ tự generated thành 1 page riêng biệt nhau (VD: 1 list 10 items = 10 pages)

## 1. Tổng quan

-   SSG with dynamic routes - **getStaticPaths**: Sẽ tạo ra trước 1 danh sách các pages

-   Dùng khi cần phải làm việc dynamic routes

-   Dùng sẽ cải thiện SEO và performance

## 2. getStaticPaths

-   Không thể sử dụng với getServerSideProps

-   Run tại thời điểm build ở server-side

-   Chỉ có thể export từ 1 page

```ts
export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
        fallback: false, // or true or 'blocking'
    };
}

// trong paths có bao nhiêu item -> genarated bấy nhiêu file HTML
/*
    fallback: false => trả về not found

*/
```

**Lưu ý**:

-   Nếu trong trường hợp web có hơn 100 nghìn, triệu sản phẩm (item) -> có hơn triệu file HTML static -> ảnh hưởng đến hiệu suất build rất lâu
    => Lúc này sẽ cần dùng ISR - **Incremental Static Regeneration**
