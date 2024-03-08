import useSWR, { SWRConfig } from 'swr';
import { EmptyLayout } from '@/components/layouts/empty';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppPropsWithLayout } from '../models';
import { axiosClient } from '@/api/axios-client';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;
    // console.log('App re-render');
    return (
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
}
export default MyApp;
