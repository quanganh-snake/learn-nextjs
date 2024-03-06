import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostParamsProps {}

export default function PostParams(props: PostParamsProps) {
    const router = useRouter();

    return (
        <div>
            <h1>Post Params Post</h1>

            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    );
}

export const getServerSideProps = async () => {
    // fake slow query
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return {
        props: {},
    };
};
