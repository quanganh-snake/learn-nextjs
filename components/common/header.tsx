import * as React from 'react';

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
    console.log('render header');
    return (
        <div>
            <h1>This is Header</h1>
        </div>
    );
}
