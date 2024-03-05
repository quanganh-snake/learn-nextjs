import { useRouter } from 'next/router';
import * as React from 'react';

export interface RouteCatchAllParamProps {}

export default function RouteCatchAllParam(props: RouteCatchAllParamProps) {
    const router = useRouter();
    return (
        <div>
            <h1>Catch All Routes</h1>
            <p>Route query: {JSON.stringify(router.query)}</p>
        </div>
    );
}
