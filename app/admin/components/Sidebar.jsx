'use client';

import Link from 'next/link';
import { Home, User, FileText, List, LogOut, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signOut } from '@/app/login/action';
import { createClient } from '@/utils/supabase/client';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Sidebar({ isOpen, toggleSidebar }) {
  const router = useRouter();

  const [profile, setProfile] = useState({
    email: '',
    fullName: '',
    profileImage: '',
  });

  useEffect(() => {
    async function fetchProfile() {
      // Retrieve the authenticated user
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const email = user.email;
        // Fetch name and profile_image from the user_profiles table
        const { data, error } = await supabase
          .from('user_profiles')
          .select('name, profile_image')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error("Error fetching user profile:", error);
          // Fallback if there's an error
          setProfile({ email, fullName: "Admin User", profileImage: '' });
        } else {
          setProfile({
            email,
            fullName: data.name || "Admin User",
            profileImage: data.profile_image || '',
          });
        }
      }
    }
    fetchProfile();
  }, []);

  // Helper to generate initials from a full name
  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  return (
    <aside
      className={`fixed top-14 h-[calc(100vh-55px)] inset-y-0 left-0 z-30 w-80 transform bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
        <div className="flex items-center justify-start">
          <div className="bg-emerald-500 p-2 rounded-full">
            <Settings className="text-white" size={18} />
          </div>
          <span className="ml-3 text-xl font-light text-white tracking-wide">Admin Portal</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-8 px-4">
        <ul className="space-y-2 m-0">
          <li>
            <Link href="/admin">
              <span className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-emerald-400 transition-all duration-200">
                <Home size={18} className="mr-3" />
                <span className="font-medium">Dashboard</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/admin/profile">
              <span className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-emerald-400 transition-all duration-200">
                <User size={18} className="mr-3" />
                <span className="font-medium">Edit Profile</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/admin/add-blog">
              <span className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-emerald-400 transition-all duration-200">
                <FileText size={18} className="mr-3" />
                <span className="font-medium">Add Blog</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/admin/manage-blogs">
              <span className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-emerald-400 transition-all duration-200">
                <List size={18} className="mr-3" />
                <span className="font-medium">Manage Blogs</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Admin Profile Preview */}
      <div className="mt-auto w-[285px] mx-4 mb-6 absolute bottom-0">
        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
          <div className="flex items-center">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.fullName}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold">
                {getInitials(profile.fullName)}
              </div>
            )}
            <div className="ml-3">
              <p className="text-white font-medium">{profile.fullName}</p>
              <p className="text-slate-400 text-sm">{profile.email}</p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="mt-4 flex w-full items-center justify-center py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-md transition-all duration-200 shadow-md"
          >
            <LogOut size={16} className="mr-2" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
