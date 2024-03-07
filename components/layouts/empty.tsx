import { LayoutProps } from '@/models/index';

export function EmptyLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>Empty Layout</h1>
            <div>{children}</div>
        </div>
    );
}
