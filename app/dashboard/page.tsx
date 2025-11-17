import Link from 'next/link';

export default function DashboardPage() {
  // Mock data - in production, fetch from database
  const stats = [
    { name: 'Total Contacts', value: '142', change: '+12%', icon: '👥', color: 'bg-blue-500' },
    { name: 'Active Cases', value: '28', change: '+4', icon: '📋', color: 'bg-green-500' },
    { name: 'Blog Posts', value: '47', change: '+3', icon: '📝', color: 'bg-purple-500' },
    { name: 'Website Visits', value: '8,426', change: '+18%', icon: '📊', color: 'bg-orange-500' },
  ];

  const recentContacts = [
    { name: 'John Smith', email: 'john@email.com', area: 'Corporate Law', date: '2 hours ago' },
    { name: 'Sarah Johnson', email: 'sarah@email.com', area: 'Family Law', date: '5 hours ago' },
    { name: 'Mike Davis', email: 'mike@email.com', area: 'Litigation', date: '1 day ago' },
  ];

  const quickActions = [
    { name: 'New Blog Post', href: '/dashboard/blog', icon: '✍️', color: 'bg-purple-500' },
    { name: 'View Contacts', href: '/dashboard/contacts', icon: '👥', color: 'bg-blue-500' },
    { name: 'Analytics', href: '/dashboard/analytics', icon: '📈', color: 'bg-green-500' },
    { name: 'Settings', href: '/dashboard/settings', icon: '⚙️', color: 'bg-gray-500' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Welcome back, Mateo! Here's what's happening with your law firm.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.color} text-white text-2xl`}>
                {stat.icon}
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              href={action.href}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color} text-white text-xl mb-3`}>
                {action.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">{action.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Contacts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Contact Inquiries</h2>
            <Link href="/dashboard/contacts" className="text-sm font-medium text-primary hover:underline">
              View All →
            </Link>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentContacts.map((contact, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{contact.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{contact.email}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {contact.area}
                  </span>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{contact.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
