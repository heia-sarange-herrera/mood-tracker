import { ReactNode } from 'react';
import DashboardNav from './DashboarNav';

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-neutral-100 flex flex-col">
            <div className="flex-grow">{children}</div>
            <DashboardNav/>
        </div>
    );
}
