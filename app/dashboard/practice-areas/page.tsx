'use client';

export default function PracticeAreasPage() {
  const practiceAreas = [
    { id: 1, name: 'Corporate Law', description: 'Expert guidance for your business from formation to compliance.', icon: '⚖️', active: true, order: 1 },
    { id: 2, name: 'Family Law', description: 'Compassionate and strategic representation in family matters.', icon: '👨‍👩‍👧‍👦', active: true, order: 2 },
    { id: 3, name: 'Litigation', description: 'Assertive advocacy in complex commercial and civil disputes.', icon: '🔨', active: true, order: 3 },
    { id: 4, name: 'Estate Planning', description: 'Protect your legacy with comprehensive estate planning services.', icon: '🏛️', active: false, order: 4 },
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Practice Areas Management</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Manage your firm's practice areas and services</p>
        </div>
        <button className="px-4 py-2 bg-primary text-blue-dark font-medium rounded-lg hover:opacity-90 transition-opacity">
          + Add Practice Area
        </button>
      </div>

      {/* Practice Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {practiceAreas.map((area) => (
          <div key={area.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{area.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{area.name}</h3>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    area.active ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {area.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  ✏️
                </button>
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  🗑️
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{area.description}</p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-500 dark:text-gray-400">Display Order: #{area.order}</span>
              <button className="text-sm text-primary hover:underline font-medium">Edit Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Services by Practice Area */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Services by Practice Area</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Corporate Law Services</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Business Formation & Structure</li>
              <li>• Contract Drafting & Review</li>
              <li>• Mergers & Acquisitions</li>
              <li>• Corporate Compliance</li>
            </ul>
            <button className="mt-2 text-sm text-primary hover:underline">Edit Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}
