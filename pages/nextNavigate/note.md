# 1. Liên kết giữa các Page với component Link - next/link

-   props của **Link**

    -   href

    -   passHref

    -   prefetch

    -   replace

    -   scroll

# 2. Điều hướng với router.push()

-   Cách 1: dùng router.push() với tham số là 1 chuỗi path -> giống với navigate trong ReactJS

```nextjs
    router.push('/routes')
```

-   Cách 2: dùng router.push() với tham số là 1 object

```nextjs

    router.push({
        pathname: '/routes/[routeId]',
        query: {
            routeId: 1,
            search: 'abc',
            ...
        }
    })

```

# 3. Cách hoạt động của prefetching (\*)

-   Khi dùng component Link -> cần tải file abc.js -> tải data cần hiển thị trong file

-   prefetch -> giúp tải data, file sẵn -> khi dùng Link gọi -> tới luôn file mà không cần tải

-   Mặc định dùng component Link thì props **prefetch** mặc định === true

-   props **prefetch** chỉ được enable khi run ở mode **production**

-   Nếu đường truyền mạng kém thì props **prefetch** tự động **disable**

# Lưu ý:

-   NextJS chỉ **tải** file JavaScript chứ chưa **thực thi**
