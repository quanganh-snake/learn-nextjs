import { LayoutProps } from '@/models/index';
import Link from 'next/link';

export function AdminLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>Admin Layout</h1>
            <ul
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                    padding: '6px',
                    backgroundColor: 'Highlight',
                }}
            >
                <li>
                    <Link href="/" style={{ color: '#d9d9d9', fontWeight: 700 }}>
                        View Home
                    </Link>
                </li>
            </ul>

            <div className="">{children}</div>
        </div>
    );
}
