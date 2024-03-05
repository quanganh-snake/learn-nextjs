import { useRouter } from 'next/router';
import * as React from 'react';

export interface RouteDetailProps {}

export default function RouteDetail(props: RouteDetailProps) {
    const router = useRouter();
    return (
        <div>
            <h1>Route Detail</h1>
            <p>Single param: {JSON.stringify(router.query)}</p>
        </div>
    );
}
