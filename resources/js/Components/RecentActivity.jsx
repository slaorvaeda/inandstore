// RecentActivity.js
import React from 'react';

const RecentActivity = () => {
    const activities = [
        { date: '2025-01-03', description: 'Purchase Order #1234', amount: '+ $200.00', amountClass: 'text-green-600' },
        { date: '2025-01-02', description: 'Invoice Payment #5678', amount: '- $150.00', amountClass: 'text-red-600' },
    ];

    return (
        <section className="mt-6 bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Description</th>
                        <th className="p-2 border">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity, index) => (
                        <tr key={index}>
                            <td className="p-2 border">{activity.date}</td>
                            <td className="p-2 border">{activity.description}</td>
                            <td className={`p-2 border ${activity.amountClass}`}>{activity.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default RecentActivity;
