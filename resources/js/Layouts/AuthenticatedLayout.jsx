import { Link, usePage, router } from '@inertiajs/react';
import { useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import Navbar from '@/Components/Navbar';
import Stats from '@/Components/Stats';
import CustomerList from '@/Components/CustomerList'; // Keep this import, but Inertia will handle routing

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'), {}, {
            onFinish: () => {
                window.location.href = route('login');
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* <Head title="Dashboardr" /> */}
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                {header && (
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                <main className="m-2 bg-[#d3dde4] p-3 rounded-md">
                    {children} {/* Render the Inertia page here */}
                </main>
            </div>
        </div>
    );
}
