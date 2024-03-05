# Pre-rendering (SSG - SSR ) - CSR - ISR

1. Pre-rendering gốm:

-   SSR - Server Side Rendering

-   SSG - Static Site Generation

-> Render HTML sẵn ở phía Server -> User thấy sẵn HTML UI -> Tiếp theo nó sẽ load thêm JS => ReactDOM.hydrate()

\*\* No Pre-rendering: Mặc định ban đầu load JS => ReactDOM.hydrate() ra UI

2. Cách hoạt động của SSG - **Static Site Generation** : Nhanh + hỗ trợ SEO

-   Sau khi **build** -> tạo ra các HTML -> user thấy UI + request nhanh - mượt

3. SSR - **Server Side Rendering** : Nhanh + hỗ trợ SEO

-   User request lên server -> server tạo HTML -> trả về choh user

4. CSR - **Client Side Rendering** : Nhanh + hỗ trợ cho các web private (dùng cho 1 công ty, doanh nghiệp, không public ra cho các người dùng bên ngoài), quản trị

-   CSR = Static Generation without Data + Fetch Data on the Client-Side

-   Sau khi **build** -> tạo ra các HTML -> user thực hiện request sẽ fetch data ra

5. ISR - **Incremental Static Regeneration** : Giống kiểu load more của Facebook -> đưa cái phổ biến lên + kèm có tải data các cái sau -> kéo đến đâu hiển thị đến đấy

**Lưu ý**: NextJS lưu động về cách redering khác nhau, có thể config từng page theo từng kiểu rendering

-   rendering **Static** : Mặc định NextJS rendering theo Static HTML -> khi code không cần khởi tạo props

-   renderig **SSG** : Mặc định NextJS rendering cả Static HTML + JSON -> khi code dùng **getStaticProps** cho page

-   rendering **ISR** : khi code dùng **getStaticProps**

-   rendering **SSG + CSR** : pre-rendered HTML + data fetching on client side -> dùng **useEffect**

-   rendering **SSR** : dùng **getInitialProps** hoặc **getServerSideProps**
