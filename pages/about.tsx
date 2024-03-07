// import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import Header from '@/components/common/header';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts';
// const Header = dynamic(() => import('@/components/common/header'), { ssr: false });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
    const [productList, setProductList] = useState([]);
    const router = useRouter();
    const limit = Number(router.query?.limit);
    const skip = Number(router.query?.skip);

    useEffect(() => {
        console.log('About mounting');

        return () => console.log('About unmounting');
    }, []);

    useEffect(() => {
        if (!limit) return;
        (async () => {
            const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const data = await res.json();
            setProductList(data.products);
        })();
    }, [limit]);

    function handleNextClick() {
        router.push(
            {
                pathname: '/about',
                query: {
                    limit: (Number(limit) || 0) + 10,
                    skip: (Number(skip) || 0) + 10,
                },
            },
            undefined,
            { shallow: true },
        );
    }
    return (
        <div>
            <div className="header">
                <h1>This is about page</h1>
                <Link
                    href="/"
                    style={{ padding: '10px', borderRadius: '22px', backgroundColor: '#d9d9d9' }}
                >
                    Go back home
                </Link>
                <Header />

                <ul className="product-list">
                    {productList.map((productItem: any) => {
                        return <li key={productItem.id}>{productItem.title}</li>;
                    })}
                </ul>

                <button
                    type="button"
                    onClick={handleNextClick}
                    style={{ padding: '10px', borderRadius: '22px', backgroundColor: '#d9d9d9' }}
                >
                    Get Data
                </button>
            </div>
        </div>
    );
}

AboutPage.Layout = MainLayout;

export async function getStaticProps() {
    console.log('>>>Get static props');
    return {
        props: {},
    };
}
