// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import {
// //   AiOutlineHeart,
// //   AiOutlineLink,
// //   AiOutlineTwitter,
// // } from "react-icons/ai";
// // import { Link as ScrollLink, Element } from "react-scroll";

// // // Blog sections definition
// // const BLOG_SECTIONS = [
// //   { id: "introduction", title: "Introduction", field: "introduction" },
// //   {
// //     id: "ai-integration",
// //     title: "1. AI Integration in SaaS",
// //     field: "aiIntegration",
// //   },
// //   { id: "no-code", title: "2. No-Code Solutions", field: "noCodeSolutions" },
// //   {
// //     id: "vertical-saas",
// //     title: "3. Vertical SaaS Growth",
// //     field: "verticalSaaS",
// //   },
// //   { id: "conclusion", title: "Conclusion", field: "conclusion" },
// // ];

// // const BlogContent = ({ blog }) => {
// //   if (!blog) {
// //     return <div className="p-8 text-center">Blog content not available</div>;
// //   }

// //   return (
// //     <div className="max-w-7xl my-10 mx-auto px-4">
// //       <div className="flex flex-col lg:flex-row gap-12">
// //         {/* Table of Contents Sidebar */}
// //         <aside className="w-full  lg:w-64 order-2 lg:order-1">
// //           <div className="sticky top-24">
// //             <h3 className="text-lg font-semibold mb-6">Table of Contents</h3>
// //             <ul className="space-y-4 text-sm">
// //               {BLOG_SECTIONS.map((section) => (
// //                 <li key={section.id}>
// //                   <ScrollLink
// //                     to={section.id}
// //                     smooth={true}
// //                     offset={-80}
// //                     duration={500}
// //                     className="cursor-pointer"
// //                     activeClass="text-themeColor font-medium"
// //                     spy={true}
// //                   >
// //                     {section.title}
// //                   </ScrollLink>
// //                 </li>
// //               ))}
// //             </ul>

// //             {/* Share buttons */}
// //             <div className="mt-8">
// //               <h4 className="text-lg font-semibold mb-4">Share this article</h4>
// //               <div className="flex gap-3">
// //                 {["heart", "link", "twitter"].map((type) => (
// //                   <button
// //                     key={type}
// //                     className="p-2 rounded-full hover:bg-gray-100 transition"
// //                     aria-label={`Share with ${type}`}
// //                   >
// //                     {type === "heart" && <AiOutlineHeart className="w-5 h-5" />}
// //                     {type === "link" && <AiOutlineLink className="w-5 h-5" />}
// //                     {type === "twitter" && (
// //                       <AiOutlineTwitter className="w-5 h-5" />
// //                     )}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </aside>

// //         {/* Main Content */}
// //         <article className="w-full lg:flex-1 order-1 lg:order-2 prose prose-lg max-w-none ">
// //           {/* Sections */}
// //           {BLOG_SECTIONS.map((section) => (
// //             <Element name={section.id} key={section.id} className="mb-12">
// //               <h2 className="text-xl sm:text-3xl font-bold mb-6">
// //                 {section.title}
// //               </h2>
// //               <p className="leading-relaxed text-sm">{blog[section.field]}</p>

// //               {/* Code example for AI section */}
// //               {section.id === "ai-integration" && (
// //                 <div className="bg-[#1E293B] rounded-lg p-6 font-mono text-sm text-white overflow-x-auto mt-6">
// //                   <pre>
// //                     <code>{`// Example AI Integration Code
// // const aiModel = new SaaSAI({
// //   model: 'gpt-4',
// //   temperature: 0.7
// // });

// // async function processUserQuery(query) {
// //   const response = await aiModel.analyze(query);
// //   return response.suggestions;
// // }`}</code>
// //                   </pre>
// //                 </div>
// //               )}
// //             </Element>
// //           ))}

// //           {/* Author Bio */}
// //           <div className="mt-16 p-8 bg-white rounded-xl shadow-sm">
// //             <div className="flex flex-col sm:flex-row items-start gap-6">
// //               <div className="relative w-16 h-16 rounded-full overflow-hidden border shrink-0">
// //                 <Image
// //                   src={blog.authorImage}
// //                   alt={blog.author}
// //                   fill
// //                   sizes="64px"
// //                   className="object-cover"
// //                 />
// //               </div>
// //               <div className="flex-1">
// //                 <p className="font-semibold mb-1">Written by {blog.author}</p>
// //                 <p className="font-light text-sm mb-4">{blog.authorBio}</p>
// //                 <div className="flex gap-4">
// //                   <Link href="#" className="text-themeColor hover:underline">
// //                     Follow on Twitter
// //                   </Link>
// //                   <Link href="#" className="text-themeColor hover:underline">
// //                     Connect on LinkedIn
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </article>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogContent;



// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { AiOutlineHeart, AiOutlineLink, AiOutlineTwitter } from "react-icons/ai";
// import { Link as ScrollLink, Element } from "react-scroll";

// // Dynamic sections list – update based on what’s stored in DB
// const BLOG_SECTIONS = [
//   { id: "introduction", title: "Introduction", field: "introduction" },
//   { id: "ai-integration", title: "1. AI Integration in SaaS", field: "aiIntegration" },
//   { id: "no-code", title: "2. No-Code Solutions", field: "noCodeSolutions" },
//   { id: "vertical-saas", title: "3. Vertical SaaS Growth", field: "verticalSaaS" },
//   { id: "conclusion", title: "Conclusion", field: "conclusion" },
// ];

// const BlogContent = ({ blog }) => {
//   if (!blog) {
//     return <div className="p-8 text-center">Blog content not available</div>;
//   }

//   return (
//     <div className="max-w-7xl my-10 mx-auto px-4">
//       <div className="flex flex-col lg:flex-row gap-12">
//         {/* Sidebar */}
//         <aside className="w-full lg:w-64 order-2 lg:order-1">
//           <div className="sticky top-24">
//             <h3 className="text-lg font-semibold mb-6">Table of Contents</h3>
//             <ul className="space-y-4 text-sm">
//               {BLOG_SECTIONS.map((section) => (
//                 <li key={section.id}>
//                   <ScrollLink
//                     to={section.id}
//                     smooth={true}
//                     offset={-80}
//                     duration={500}
//                     className="cursor-pointer"
//                     activeClass="text-themeColor font-medium"
//                     spy={true}
//                   >
//                     {section.title}
//                   </ScrollLink>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-8">
//               <h4 className="text-lg font-semibold mb-4">Share this article</h4>
//               <div className="flex gap-3">
//                 {[AiOutlineHeart, AiOutlineLink, AiOutlineTwitter].map((Icon, i) => (
//                   <button
//                     key={i}
//                     className="p-2 rounded-full hover:bg-gray-100 transition"
//                     aria-label="Share"
//                   >
//                     <Icon className="w-5 h-5" />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <article className="w-full lg:flex-1 order-1 lg:order-2 prose prose-lg max-w-none">
//           {BLOG_SECTIONS.map((section) => (
//             blog[section.field] && (
//               <Element name={section.id} key={section.id} className="mb-12">
//                 <h2 className="text-xl sm:text-3xl font-bold mb-6">{section.title}</h2>
//                 <p className="leading-relaxed text-sm">{blog[section.field]}</p>

//                 {section.id === "ai-integration" && (
//                   <div className="bg-[#1E293B] rounded-lg p-6 font-mono text-sm text-white overflow-x-auto mt-6">
//                     <pre>
//                       <code>{`// Example AI Integration Code
// const aiModel = new SaaSAI({
//   model: 'gpt-4',
//   temperature: 0.7
// });

// async function processUserQuery(query) {
//   const response = await aiModel.analyze(query);
//   return response.suggestions;
// }`}</code>
//                     </pre>
//                   </div>
//                 )}
//               </Element>
//             )
//           ))}

//           {/* Author Bio */}
//           <div className="mt-16 p-8 bg-white rounded-xl shadow-sm">
//             <div className="flex flex-col sm:flex-row items-start gap-6">
//               <div className="relative w-16 h-16 rounded-full overflow-hidden border shrink-0">
//                 <Image
//                   src={blog.authorImage}
//                   alt={blog.author}
//                   fill
//                   sizes="64px"
//                   className="object-cover"
//                 />
//               </div>
//               <div className="flex-1">
//                 <p className="font-semibold mb-1">Written by {blog.author}</p>
//                 <p className="font-light text-sm mb-4">{blog.authorBio}</p>
//                 <div className="flex gap-4">
//                   <Link href="#" className="text-themeColor hover:underline">Follow on Twitter</Link>
//                   <Link href="#" className="text-themeColor hover:underline">Connect on LinkedIn</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </article>
//       </div>
//     </div>
//   );
// };

// export default BlogContent;


'use client';

import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineLink, AiOutlineTwitter } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const BlogContent = ({ blog }) => {
  if (!blog) {
    return <div className="p-8 text-center">Blog content not available</div>;
  }

  // Parse table of contents from blog data (assumes it is stored as a JSON string)
  let toc = [];
  try {
    if (blog.table_of_contents) {
      toc = typeof blog.table_of_contents === 'string'
        ? JSON.parse(blog.table_of_contents)
        : blog.table_of_contents;
    }
  } catch (error) {
    console.error('Error parsing table of contents:', error);
  }

  return (
    <div className="max-w-7xl my-10 mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 order-2 lg:order-1">
          <div className="sticky top-24">
            {toc.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mb-6">Table of Contents</h3>
                <ul className="space-y-4 text-sm">
                  {toc.map((section, index) => (
                    <li key={index}>
                      <ScrollLink
                        to={section.slug}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="cursor-pointer"
                        activeClass="text-themeColor font-medium"
                        spy={true}
                      >
                        {section.title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Share this article</h4>
              <div className="flex gap-3">
                {[AiOutlineHeart, AiOutlineLink, AiOutlineTwitter].map((Icon, i) => (
                  <button
                    key={i}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Share"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <article className="w-full lg:flex-1 order-1 lg:order-2 prose prose-lg max-w-none">
          {/* The blog content is rendered as HTML so that your headings and other styles show correctly */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />

          {/* Author Bio */}
          {blog.authorImage && blog.author && (
            <div className="mt-16 p-8 bg-white rounded-xl shadow-sm">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border shrink-0">
                  <Image
                    src={blog.authorImage}
                    alt={blog.author}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Written by {blog.author}</p>
                  {blog.authorBio && (
                    <p className="font-light text-sm mb-4">{blog.authorBio}</p>
                  )}
                  <div className="flex gap-4">
                    <Link href="#" className="text-themeColor hover:underline">
                      Follow on Twitter
                    </Link>
                    <Link href="#" className="text-themeColor hover:underline">
                      Connect on LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogContent;


