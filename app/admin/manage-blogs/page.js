"use client"
import DashboardLayout from '../components/DashboardLayout';
import Link from 'next/link';
import { useState } from 'react';

export default function ManageBlogs() {
  // Dummy blog posts; in a real app, you’d fetch this data from an API or database.
  const [blogs] = useState([
    { id: 1, title: 'First Blog Post', date: '2023-04-01' },
    { id: 2, title: 'Second Blog Post', date: '2023-04-05' },
  ]);

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="py-2 px-4 border-b">{blog.id}</td>
              <td className="py-2 px-4 border-b">{blog.title}</td>
              <td className="py-2 px-4 border-b">{blog.date}</td>
              <td className="py-2 px-4 border-b">
                <Link href={`/admin/edit-blog/${blog.id}`}>
                  <span className="text-blue-500 hover:underline">Edit</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
