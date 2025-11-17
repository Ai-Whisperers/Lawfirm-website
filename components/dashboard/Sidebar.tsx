'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: '📊' },
  { name: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
  { name: 'Contacts', href: '/dashboard/contacts', icon: '👥' },
  { name: 'Blog Posts', href: '/dashboard/blog', icon: '📝' },
  { name: 'Practice Areas', href: '/dashboard/practice-areas', icon: '⚖️' },
  { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col bg-blue-dark text-white">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-6">
        <div className="size-8 text-primary">
          <svg className="text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1.487a1.5 1.5 0 0 1 1.06.44l7.25 7.25a1.5 1.5 0 0 1 0 2.122l-7.25 7.25a1.5 1.5 0 0 1-2.122 0L3.717 11.3a1.5 1.5 0 0 1 0-2.122l7.25-7.25a1.5 1.5 0 0 1 1.03-.44zM12 3.608L5.828 9.78l6.171 6.172 6.172-6.172L12 3.608z"></path>
          </svg>
        </div>
        <span className="text-lg font-bold">Admin Panel</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-blue-dark'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-blue-dark font-bold">
            MC
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Mateo Cardozo</p>
            <p className="text-xs text-white/60">Administrator</p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
        >
          <span>🏠</span>
          Back to Website
        </Link>
      </div>
    </div>
  );
}
