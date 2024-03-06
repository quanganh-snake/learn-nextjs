# SSR - Server Side Rendering

-> Cứ có request -> server sẽ fetch data -> tạo ra file HTML

-> Ảnh hưởng đến performent -> query nhiều

## 1. function getServerSideProps

-   Run on server-side only (Chỉ chạy ở phía máy chủ)

-   Run per page request (1page = 1 request)

-   TTFB (Time To First Byte) will be slower than getStaticProps : chậm hơn so với getStaticProps

-   Export getServerSideProps from your Page to enable SSR : export getServerSideProps trên page có bật SSR

-   Trong **context** của getServerSideProps, có các tham số phổ biển như: params, req, res, query, ...

**LINK:** https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props

## 2. Using cache

-   Nhằm khắc phục tình trạng bị chậm của SSR

-   Chỉ hoạt động trên CDN, không thấy tác dụng trên localhost

### TH1: using: s-maxage=5

-> Khi user quest lên -> Server sẽ lấy data request đó lưu vào cache và giữ nó trong 5s

-> Trong 5s đấy nếu có user khác cùng request 1 data này thì nó chỉ việc lấy data có sẵn trong cache đưa lên -> không cần Server lấy data

-> Hết 5s -> user request -> Server lại phải lấy lại...

**Lưu ý**

-   Nếu trong thời gian data đang được lưu trong cache mà bên data lại cập nhật -> thì data hiển thị bên UI vẫn là data trong cache chứ chưa phải là data được cập nhật

EX: Trong cache có data là 'a' được giữ trong 5s, trong 5s cache đang dữ mà cập nhật data thành 'b' -> Thì có refresh lại vẫn là 'a'. Sau 5s-> cache hết, refresh thì data mới là 'b'

```tsx
export async function getServerSideProps(context) {
    context.res.setHeader('Cache-Control', 's-maxage=5');
    // ...
}
```

### TH2: using: s-maxage=5 & stale-while-revalidate

-   Có thêm **stale-while-revalidate** (stale-while-revalidate không có giá trị)

-   Nếu hết 5s cache, khi dùng **stale-while-revalidate** -> sau 5s, thì nó vẫn sẽ trả về cache với data cũ (được gọi là stale) -> tiếp theo, nó sẽ gọi lại hàm **getServerSideProps** -> nhưng lúc này gọi hàm **getServerSideProps** trả về dữ liệu mới và có lưu lại vào cache -> tạo thành vòng lặp

-   Với **stale-while-revalidate** không có giá trị thì có thể ngày hôm sau refresh vẫn dính cache data cũ view lên UI

```tsx
export async function getServerSideProps(context) {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');
    // ...
}
```

### TH3: using: s-maxage=5 & stale-while-revalidate=5

-   Nếu **stale-while-revalidate** có giá trị -> trong thời gian đấy nó sẽ hết hạn, hôm sau sẽ update được dữ liệu mới nhất mà không dính cache cũ

```tsx
export async function getServerSideProps(context) {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');
    // ...
}
```
