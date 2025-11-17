'use client';

import { useState } from 'react';

export default function ContactsPage() {
  const [filter, setFilter] = useState('all');

  // Mock data - in production, fetch from database
  const contacts = [
    { id: 1, name: 'John Smith', email: 'john@email.com', phone: '(555) 123-4567', area: 'Corporate Law', status: 'New', date: '2024-01-15', message: 'Need help with LLC formation' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '(555) 234-5678', area: 'Family Law', status: 'Contacted', date: '2024-01-14', message: 'Divorce consultation needed' },
    { id: 3, name: 'Mike Davis', email: 'mike@email.com', phone: '(555) 345-6789', area: 'Litigation', status: 'In Progress', date: '2024-01-13', message: 'Commercial dispute' },
    { id: 4, name: 'Emily Chen', email: 'emily@email.com', phone: '(555) 456-7890', area: 'Estate Planning', status: 'New', date: '2024-01-12', message: 'Will and trust setup' },
    { id: 5, name: 'Robert Wilson', email: 'robert@email.com', phone: '(555) 567-8901', area: 'Corporate Law', status: 'Closed', date: '2024-01-11', message: 'Contract review completed' },
  ];

  const filteredContacts = filter === 'all'
    ? contacts
    : contacts.filter(c => c.status.toLowerCase() === filter);

  const statusColors: Record<string, string> = {
    'New': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    'Contacted': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    'In Progress': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    'Closed': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Management</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Manage leads and client inquiries</p>
        </div>
        <button className="px-4 py-2 bg-primary text-blue-dark font-medium rounded-lg hover:opacity-90 transition-opacity">
          Export to CSV
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            filter === 'all' ? 'bg-primary text-blue-dark' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          All ({contacts.length})
        </button>
        <button
          onClick={() => setFilter('new')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            filter === 'new' ? 'bg-primary text-blue-dark' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          New ({contacts.filter(c => c.status === 'New').length})
        </button>
        <button
          onClick={() => setFilter('contacted')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            filter === 'contacted' ? 'bg-primary text-blue-dark' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          Contacted ({contacts.filter(c => c.status === 'Contacted').length})
        </button>
        <button
          onClick={() => setFilter('in progress')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            filter === 'in progress' ? 'bg-primary text-blue-dark' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          In Progress ({contacts.filter(c => c.status === 'In Progress').length})
        </button>
      </div>

      {/* Contacts Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Practice Area</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredContacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{contact.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{contact.message}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">{contact.email}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{contact.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{contact.area}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[contact.status]}`}>
                    {contact.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{contact.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-primary hover:underline mr-3">View</button>
                  <button className="text-gray-600 dark:text-gray-400 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
