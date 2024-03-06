import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostListPageProps {
    posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
    return (
        <div>
            <h2>Post list Page</h2>
            <div className="">
                <ul>
                    {posts.map((postItem) => (
                        <li key={postItem.id}>
                            <Link href={`/posts/${postItem.id}`}>{postItem.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
    context: GetStaticPropsContext,
) => {
    // server side
    // build-time

    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return {
        props: {
            posts: data.map((item: any) => ({ id: item.id, title: item.title })),
        },
    };
};
