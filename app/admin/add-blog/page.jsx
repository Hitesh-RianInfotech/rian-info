"use client";

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import DOMPurify from 'dompurify';
import { supabase } from '@/lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import DashboardLayout from '../components/DashboardLayout';

// Simplified toolbar button component
const ToolbarButton = ({ onClick, isActive, children, title }) => (
  <button
    onClick={onClick}
    title={title}
    className={`p-2 rounded transition-colors ${
      isActive ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-200'
    }`}
  >
    {children}
  </button>
);

// Editor toolbar component
function MenuBar({ editor }) {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt('Image URL');
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Link URL', previousUrl);
    
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().unsetLink().run();
      return;
    }
    
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border-b">
      <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} title="Bold">
        <b>B</b>
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} title="Italic">
        <em>I</em>
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} title="Underline">
        <u>U</u>
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} title="Bullet List">
        • List
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('ordedList')} title="Ordered List">
        1. List
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })} title="Heading 2">
        H
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().setParagraph().run()} isActive={editor.isActive('paragraph')} title="Paragraph">
        P
      </ToolbarButton>
      <ToolbarButton onClick={setLink} isActive={editor.isActive('link')} title="Link">
        🔗
      </ToolbarButton>
      <ToolbarButton onClick={addImage} title="Image">
        🖼️
      </ToolbarButton>
    </div>
  );
}

export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [tags, setTags] = useState('');
  const [readTime, setReadTime] = useState('00:05:00');
  const [isSaving, setIsSaving] = useState(false);

  // Configure editor with the same styling that will persist in stored content
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({ levels: [1, 2] }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-blue-600 underline' },
      }),
      Image.configure({
        HTMLAttributes: { class: 'mx-auto rounded shadow my-4' },
      }),
      Placeholder.configure({
        placeholder: 'Write your story here...',
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none',
      },
    },
  });

  // Extract headings for table of contents
  const extractTableOfContents = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const headings = tempDiv.querySelectorAll('h2');
    
    return Array.from(headings).map((el) => ({
      title: el.textContent,
      slug: el.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
    }));
  };

  // Handle publishing the blog post
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim()) {
      alert('Please add a title');
      return;
    }
    
    if (!editor || !editor.getJSON().content?.length) {
      alert('Content cannot be empty');
      return;
    }
    
    if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(readTime)) {
      alert('Read time must be in HH:MM:SS format');
      return;
    }

    setIsSaving(true);

    try {
      // Sanitize HTML content while preserving styling
      const htmlContent = DOMPurify.sanitize(editor.getHTML());
      const toc = extractTableOfContents(htmlContent);
      const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      
      // Sample author ID - replace with authentication logic in production
      const author_id = '42c4111e-1c7f-434b-9756-7d3434fa1e7e';

      // Save to Supabase with all styling intact
      const { error } = await supabase.from('blogs').insert([
        {
          id: uuidv4(),
          author_id,
          title,
          slug,
          content: htmlContent,  // HTML with styling preserved
          blog_image: coverImage,
          read_time: readTime,
          created_at: new Date().toISOString(),
          tags,
          table_of_contents: JSON.stringify(toc),
        },
      ]);

      if (error) throw error;
      
      alert('Blog published successfully!');
      
      // Reset form
      setTitle('');
      setCoverImage('');
      setTags('');
      setReadTime('00:05:00');
      editor.commands.setContent('');
    } catch (error) {
      console.error('Failed to publish:', error.message);
      alert('Something went wrong while saving.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto pt-12">
        <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Title</label>
            <input
              autoFocus
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 font-bold text-xl border rounded"
              placeholder="Enter blog title"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">Cover Image URL</label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Image URL for blog cover"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">Tags</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Tags (comma separated)"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">Read Time</label>
            <input
              type="text"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Read time (e.g. 00:05:00)"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">Content</label>
            {editor && <MenuBar editor={editor} />}
            <div className="border rounded p-4 min-h-[300px] mb-4">
              <EditorContent editor={editor} />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            {isSaving ? 'Publishing...' : 'Publish Blog'}
          </button>
        </form>
      </div>

      {/* Global styles to ensure consistent rendering for editor and when content is retrieved */}
      <style jsx global>{`
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 1rem 0;
        }
        h2 {
          font-size: 2rem;
          font-weight: 600;
          margin: 0.75rem 0;
        }
        p {
          font-size: 1rem;
          margin: 0.5rem 0;
        }
        ul, ol {
          margin-left: 1.5rem;
        }
        li {
          margin-bottom: 0.5rem;
        }
        blockquote {
          border-left: 4px solid #d1d5db;
          padding-left: 1rem;
          font-style: italic;
          color: #6b7280;
        }
      `}</style>
    </DashboardLayout>
  );
}