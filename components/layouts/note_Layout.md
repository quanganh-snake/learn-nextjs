# Layout

-   Vấn đề về mounting và unmounting + re-render khi dùng Layout

-> Khi dùng layout, các page có chung layout -> khi chuyển page layout sẽ re-render hết ở bên trong div root của NextJS -> cần load lại cái Layout

## Cơ chế hoạt dộng NextJs

-   Tại file "\_app.tsx" -> nó là initialized page -> khi chuyển trang nó sẽ re-render lại -> Nhận Component mới -> thay cho Component cũ

## Cách khắc phục

-   Để không bị unmounting rồi mounting lại khi chuyển đổi giữa các page/component -> custom App/Layout (https://nextjs.org/docs/app/api-reference/file-conventions/layout)
