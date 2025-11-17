export default function AnalyticsPage() {
  const metrics = [
    { label: 'Page Views', value: '24,512', trend: '+12.3%', positive: true },
    { label: 'Unique Visitors', value: '8,426', trend: '+8.1%', positive: true },
    { label: 'Avg. Session', value: '3m 42s', trend: '+15.2%', positive: true },
    { label: 'Bounce Rate', value: '42.3%', trend: '-5.1%', positive: true },
  ];

  const topPages = [
    { page: 'Homepage', views: 8234, percentage: 33.6 },
    { page: 'Practice Areas', views: 5421, percentage: 22.1 },
    { page: 'Contact', views: 3892, percentage: 15.9 },
    { page: 'About', views: 2845, percentage: 11.6 },
    { page: 'Blog', views: 4120, percentage: 16.8 },
  ];

  const trafficSources = [
    { source: 'Organic Search', visitors: 4234, percentage: 50.2 },
    { source: 'Direct', visitors: 2103, percentage: 25.0 },
    { source: 'Social Media', visitors: 1265, percentage: 15.0 },
    { source: 'Referral', visitors: 824, percentage: 9.8 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Website performance and visitor insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.label}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
              <span className={`text-sm font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                {metric.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Pages */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Top Pages</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topPages.map((page) => (
                <div key={page.page}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{page.page}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{page.views.toLocaleString()} views</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${page.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Traffic Sources</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{source.source}</p>
                    <div className="mt-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden max-w-xs">
                      <div className="h-full bg-blue-500" style={{ width: `${source.percentage}%` }}></div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{source.visitors.toLocaleString()}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{source.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Website Traffic (Last 30 Days)</h2>
        <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">📊 Chart visualization area (integrate Chart.js or Recharts)</p>
        </div>
      </div>
    </div>
  );
}
