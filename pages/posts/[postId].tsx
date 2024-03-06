import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
    post: any;
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
    const router = useRouter();

    if (!post) return <p>Post Item Not Found</p>;

    return (
        <div>
            <h1>Post detail page</h1>
            {/* <p>Router query: {JSON.stringify(router.query)}</p> */}
            <p>
                {post.id} {' - '} {post.title}
            </p>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    console.log('>>>GET STATIC PATHS');
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();

    return {
        paths: data.map((post: any) => ({ params: { postId: post.id.toString() } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
    context: GetStaticPropsContext,
) => {
    console.log('>>>GET STATIC PROPS: ', context.params?.postId);
    const postId = context.params?.postId;
    if (!postId) return { notFound: true };
    // server side
    // build-time

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`);
    const data = await res.json();
    return {
        props: {
            post: data,
        },
    };
};
