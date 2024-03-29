import { LayoutProps } from '@/models/index';
import Link from 'next/link';

export function MainLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>Main Layout</h1>
            <ul
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '60px',
                    padding: '6px 40px',
                    backgroundColor: 'Highlight',
                }}
            >
                <li>
                    <Link href="/" style={{ color: '#d9d9d9', fontWeight: 700 }}>
                        Go Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" style={{ color: '#d9d9d9', fontWeight: 700 }}>
                        Go To About
                    </Link>
                </li>
                <li>
                    <Link href="/posts" style={{ color: '#d9d9d9', fontWeight: 700 }}>
                        Go To Post
                    </Link>
                </li>
                <li>
                    <Link href="/login" style={{ color: '#d9d9d9', fontWeight: 700 }}>
                        Go To Page Login
                    </Link>
                </li>
            </ul>

            <div className="">{children}</div>
        </div>
    );
}
