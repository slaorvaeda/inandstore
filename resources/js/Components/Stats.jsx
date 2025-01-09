// Stats.js
import React from 'react';

const Stats = () => {
    const stats = [
        { title: 'Total Sales', value: '$12,345' },
        { title: 'Stock Available', value: '123 Items' },
        { title: 'Pending Orders', value: '15' },
    ];

    return (
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                    <h3 className="text-gray-500">{stat.title}</h3>
                    <p className="text-2xl font-bold">{stat.value}</p>
                </div>
            ))}
        </section>
    );
};

export default Stats;
