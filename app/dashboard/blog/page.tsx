import Link from 'next/link';

export default function BlogManagementPage() {
  // Mock data
  const blogPosts = [
    { id: 1, title: 'Understanding Corporate Compliance: A Complete Guide', author: 'Mateo Cardozo', category: 'Corporate Law', status: 'Published', date: '2024-01-15', views: 1234 },
    { id: 2, title: 'Child Custody Laws: What Every Parent Should Know', author: 'Elena Rodriguez', category: 'Family Law', status: 'Published', date: '2024-01-10', views: 892 },
    { id: 3, title: 'When to Consider Alternative Dispute Resolution', author: 'James Patterson', category: 'Litigation', status: 'Published', date: '2024-01-08', views: 654 },
    { id: 4, title: '5 Common Estate Planning Mistakes to Avoid', author: 'Sarah Chen', category: 'Estate Planning', status: 'Draft', date: '2024-01-05', views: 0 },
    { id: 5, title: 'LLC vs Corporation: Choosing the Right Structure', author: 'Mateo Cardozo', category: 'Corporate Law', status: 'Published', date: '2024-01-03', views: 1456 },
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Blog Management</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Create and manage your blog posts</p>
        </div>
        <button className="px-4 py-2 bg-primary text-blue-dark font-medium rounded-lg hover:opacity-90 transition-opacity">
          + New Blog Post
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Posts</p>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">47</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Published</p>
          <p className="mt-2 text-3xl font-bold text-green-600">42</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Drafts</p>
          <p className="mt-2 text-3xl font-bold text-yellow-600">5</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Views</p>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">24,512</p>
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Views</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {blogPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{post.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{post.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    post.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{post.views.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-primary hover:underline mr-3">Edit</button>
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
