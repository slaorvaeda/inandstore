import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import Stats from '@/Components/Stats';
import { Link, usePage, router } from '@inertiajs/react';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import CustomerList from '@/Components/CustomerList'; // Import the CustomerList component

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

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
            <Router>
                <Sidebar /> {/* Add Sidebar component */}
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
                        <Routes>
                            <Route path="/main" element={<Stats />} />
                            <Route path="/customers" element={<CustomerList />} /> {/* Add CustomerList route */}
                            {/* Add more routes as needed */}
                        </Routes>
                    </main>
                </div>
            </Router>
        </div>
    );
}
