import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
    const router = useRouter();

    console.log('🚀 ~ file: [postId].tsx:9 ~ PostDetailPage ~ router:', router.query);

    return (
        <div>
            <h1>Route Multiple params</h1>
            <p>Router query: {JSON.stringify(router.query)}</p>
        </div>
    );
}
