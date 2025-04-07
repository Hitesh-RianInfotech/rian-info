

'use client';

import { useState, useEffect } from "react";
import { Pencil, Trash2, Eye, Search } from "lucide-react";
import Image from "next/image";
import DashboardLayout from "../components/DashboardLayout";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      // Retrieve the authenticated user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Optionally, handle unauthenticated state (e.g., redirect to login)
        setLoading(false);
        return;
      }

      // Fetch blogs where the user_id matches the authenticated user's id.
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("author_id", user.id);

      if (error) {
        console.error("Error fetching blogs:", error);
      } else {
        setBlogs(data);
      }
      setLoading(false);
    }

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      // Delete blog from Supabase
      const { error } = await supabase
        .from("blogs")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting blog:", error);
      } else {
        setBlogs(blogs.filter((blog) => blog.id !== id));
      }
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 max-w-6xl mx-auto">
          <p>Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
            <p className="text-gray-500 mt-1">Organize, edit and manage your published content</p>
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow transition-colors">
            + Add New Blog
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search blogs..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
              <option value="">All Categories</option>
              <option value="Development">Development</option>
              <option value="Frontend">Frontend</option>
              <option value="Design">Design</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
              <option value="">All Status</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Blog List */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Blog</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Category</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Status</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-600">Date</th>
                  <th className="text-right py-4 px-6 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-16 h-12 relative rounded overflow-hidden">
                          <Image
                            src={blog.image || "/api/placeholder/400/200"}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{blog.title}</p>
                          <p className="text-sm text-gray-500 truncate max-w-xs">{blog.excerpt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">{blog.category}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded text-sm ${blog.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-500">
                      {new Date(blog.publishDate).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-end items-center space-x-2">
                        <button className="p-1.5 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-md hover:bg-emerald-100 transition-colors">
                          <Pencil size={16} />
                        </button>
                        <button
                          className="p-1.5 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
                          onClick={() => handleDelete(blog.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">{blogs.length}</span> of <span className="font-medium">{blogs.length}</span> blogs
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
