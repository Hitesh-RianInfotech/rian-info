import Link from 'next/link';
import { Home, User, FileText, List, LogOut, Settings, X } from 'lucide-react';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed pt-16 inset-y-0 left-0 z-30 w-80 transform bg-gradient-to-b from-gray-800 to-gray-900 text-white transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-700">
        <div className="flex items-center justify-start">
          <Settings className="mr-2" size={20} />
          <span className="text-xl font-bold">Admin Dashboard</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4">
        <ul>
          <li className="mx-2 my-1">
            <Link href="/admin">
              <span className=" p-4 flex items-center hover:bg-gray-700 transition-colors rounded">
                <Home size={18} className="mr-3" />
                Dashboard
              </span>
            </Link>
          </li>
          <li className="mx-2 my-1">
            <Link href="/admin/profile">
              <span className=" p-4 flex items-center hover:bg-gray-700 transition-colors rounded">
                <User size={18} className="mr-3" />
                Edit Profile
              </span>
            </Link>
          </li>
          <li className="mx-2 my-1">
            <Link href="/admin/add-blog">
              <span className=" p-4 flex items-center hover:bg-gray-700 transition-colors rounded">
                <FileText size={18} className="mr-3" />
                Add Blog
              </span>
            </Link>
          </li>
          <li className="mx-2 my-1">
            <Link href="/admin/manage-blogs">
              <span className=" p-4 flex items-center hover:bg-gray-700 transition-colors rounded">
                <List size={18} className="mr-3" />
                Manage Blogs
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto p-4 border-t border-gray-700">
        <button className="flex w-full items-center justify-center py-2 px-4 bg-red-600 hover:bg-red-700 rounded transition-colors">
          <LogOut size={18} className="mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
}
