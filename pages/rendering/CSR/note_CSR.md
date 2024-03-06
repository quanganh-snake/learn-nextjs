# CSR - Client Side Rendering

## 1. Dùng **Dynamic Component**

**LINK:** https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading

-   Chỉ render bên phía client - không muốn bên phía server render

-   Dynamic Component with ssr=false

```tsx
import dynamic from 'next/dynamic';
const DynamicComponentWithNoSSR = dynamic(() => import('../components/hello3'), { ssr: false });
function Home() {
    return (
        <div>
            <Header />
            <DynamicComponentWithNoSSR />
            <p>HOME PAGE is here!</p>
        </div>
    );
}
export default Home;
```

## 2. SSG + Data fetching on client side

-   Static Generation without Data + Fetch Data on the Client-Side: Vừa kết hợp SSG và Render bên Client

-   Sử dụng thêm useEffect

### Router push with **shallow routing**

-   shallow routing: dùng với router.push() trong options.

-> nó hoạt động giống URLSearchParams, trong NextJS khi dùng sẽ chỉ thay đổi param query trên phí Client

```tsx
router.push(
    {
        pathname: '/about',
        query: {
            limit: (Number(router.query?.limit) || 0) + 1,
        },
    },
    undefined,
    { shallow: true },
);
```
