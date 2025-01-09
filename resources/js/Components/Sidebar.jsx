import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { Link, usePage, router } from '@inertiajs/react';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="flex">
            <aside ref={sidebarRef} className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out w-64 bg-gray-800 text-white flex flex-col sm:translate-x-0 sm:relative sm:translate-x-0 `}>
                <div className="h-16 flex items-center justify-center border-b border-gray-700">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
                <nav className="flex-grow p-4">
                    <ul>
                        <li>
                            <Link to="/main" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded">
                                <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m0 0L21 9M3 10h11" />
                                </svg>
                                Main
                            </Link>
                        </li>
                        <li>
                            <Link to="/inventory" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded">
                                <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l10 10M7 17L17 7" />
                                </svg>
                                Inventory
                            </Link>
                        </li>
                        <li>
                            <Link to="/transactions" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded">
                                <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v3m4-3v3m4-3v3m4-3v3M3 10h18M9 21h6" />
                                </svg>
                                Transactions
                            </Link>
                        </li>
                        <li>
                            <Link to="/customers" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded">
                                <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Customers
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <Link to="/logout" className="text-gray-300 hover:text-white">Logout</Link>
                </div>
            </aside>
            <div className="flex-1 sm:ml-64 md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 text-gray-500 focus:outline-none sm:hidden"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                {/* ...existing code... */}
            </div>
        </div>
    );
};

export default Sidebar;

