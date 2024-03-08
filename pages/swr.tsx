import { StudentDetail } from '@/components/swr';
import * as React from 'react';

export default function SwrPage() {
    return (
        <div>
            <h1>SWR Page</h1>
            <ul style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                <li>
                    <StudentDetail studentId={'aqbbx1vj1lqrtv3y0'} />
                </li>
                <li>
                    <StudentDetail studentId={'aqbbx1vj1lqrtv3y0'} />
                </li>
                <li>
                    <StudentDetail studentId={'aqbbx1vj1lqrtv3y0'} />
                </li>
            </ul>
        </div>
    );
}
