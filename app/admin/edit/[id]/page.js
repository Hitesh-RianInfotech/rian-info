"use client"
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

export default function EditBlog() {
  const router = useRouter();
  const { id } = router.query;
  
  const [blog, setBlog] = useState({
    title: '',
    content: '',
  });
  
  // In a real application, fetch the blog details using the id.
  useEffect(() => {
    if (id) {
      setBlog({
        title: `Blog Post ${id}`,
        content: `Content for blog post ${id}`,
      });
    }
  }, [id]);
  
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API call logic here to update the blog post.
    alert('Blog updated!');
  };
  
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Edit Blog Post</h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            className="w-full border p-2 rounded h-48"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Update Blog
        </button>
      </form>
    </DashboardLayout>
  );
}
