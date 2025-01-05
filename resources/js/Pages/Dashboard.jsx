import Header from '@/Components/Header';
import RecentActivity from '@/Components/RecentActivity';
import Sidebar from '@/Components/SideBar';
import Stats from '@/Components/Stats';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Dashboard" />
            <div className="flex flex-col sm:flex-row h-screen">
                <Sidebar />
                <main className="flex-grow p-6 ">
                    <Header name={user.name}/>
                    <Stats />
                    <RecentActivity />
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
