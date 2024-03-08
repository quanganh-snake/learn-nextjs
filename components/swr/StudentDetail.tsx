import * as React from 'react';
import useSWR from 'swr';

export interface StudentDetailProps {
    studentId: any;
}

const MILISECOND_PER_HOURS: number = 60 * 60 * 1000;

export function StudentDetail(props: StudentDetailProps) {
    const { studentId } = props;

    const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
        revalidateOnFocus: true,
        dedupingInterval: MILISECOND_PER_HOURS,
    });

    return (
        <div>
            <h3>Name: {data?.name || 'No name'}</h3>
        </div>
    );
}
