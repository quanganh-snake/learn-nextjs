# MODE: Automatic Static Optimization

LINK: https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization

-   Xác định 1 page là **Static** hay không => Là Static -> sẽ là Automatic Static Optimization

-   Có dùng **getServerSideProps** hoặc **getInitialProps** cho Page không (Nếu có => Sẽ không phải là **Automatic Static Optimization**).

2. dùng router.query()

-   **Automatic Static Optimization** :

*   Sau khi build => sẽ tạo 1 Static HTML
*   router.query(): Khi pre-rendering -> sau khi quá trình ReactDOM.hydrate() xong - load-request sẽ update data fetching.

-   Không phải **Automatic Static Optimization** :

*   Sau khi build => tạo ra file JS
*   router.query() : luôn có sẵn data
