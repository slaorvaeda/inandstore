// Header.js
import React from 'react';

const Header = (props) => {
    return (
        <header className="flex items-center justify-between bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Welcome, {props.name.split(" ")[0]}</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add Entry
            </button>
        </header>
    );
};

export default Header;
