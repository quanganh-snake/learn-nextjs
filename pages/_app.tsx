import { EmptyLayout } from '@/components/layouts/empty';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppPropsWithLayout } from '../models';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;
    console.log('App re-render');
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
export default MyApp;
