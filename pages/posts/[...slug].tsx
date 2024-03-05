import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostCatchSlugProps {}

export default function PostCatchSlug(props: PostCatchSlugProps) {
    const router = useRouter();
    return (
        <div>
            <h1>Post Catch All Routes</h1>
            <p>Router query: {JSON.stringify(router.query)}</p>
        </div>
    );
}
