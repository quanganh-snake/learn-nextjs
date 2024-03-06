# SSG - Static Site Generation

**LINK:** https://nextjs.org/docs/pages/building-your-application/data-fetching

-> Các file HTML sẽ được generated sau khi build -> user tái sử dụng UI

## 1. Các dạng:

1.1. Static HTML generation -> Mặc định

1.2. Static HTML + JSON Data -> dùng **getStaticProps**

1.3. Static HTML + JSON Data + Dynamic Routes -> **getStaticProps + getStaticPaths**

-   Nếu nội dung của 1 page phụ thuộc vào dữ liệu bên ngoài -> dùng **getStaticProps**

-   Nếu đường dẫn của 1 page phụ thuộc vào dữ liệu bên ngoài -> dùng **getStaticPaths**

**Lưu ý**:

-   Nếu đã dùng **getStaticProps || getStaticPaths** thì không dùng **getServerSideProps**

-   Nên dùng SSG

## 2. Khi nào thì dùng **Static Generation**?

-> Dùng cho các pages liên quan đến: Marketing pages, Blog posts, E-commerce product listings, Help and documentation, ...

-> Các pages tĩnh

## Dạng **Static HTML Generation**

-   Các pages tĩnh không cần fetch dữ liệu

-   Không cần export thêm hàm **getStaticProps || getStaticPaths**

-   HTML sẽ được tạo tại thời điểm build

```ts
export default function AboutPage() {
    return <div>About Page</div>;
}
```

## Dạng **Static HTML + JSON Data**

-   Dùng cho các page cần get dữ liệu từ api

-   Có thêm export hàm **getStaticProps**

**Lưu ý**:

-   Nên export trong 1 Page.

-   Không dùng thêm getServerSideProps (có getStaticProps || getStaticPaths thì không có getServerSideProps, ngược lại)

-   Chỉ chạy khi build (phía server)

-   Run on every request in dev mode

**EX for Static HTML + JSON Data**

```ts
interface Post {
    id: string;
    title: string;
}

interface PageProps {
    post: Post;
}

export default function PostDetailPage({ post }: PageProps) {
    const router = useRouter();
    return (
        <div>
            <h1>Post Page</h1>
            <p>{post.id}</p>
            <p>{post.title}</p>
        </div>
    );
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return {
        props: {
            post: {
                id: '123-abc',
                title: 'Learn NextJS',
            },
        },
    };
};
```
