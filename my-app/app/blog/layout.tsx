import { ReactNode } from "react";
import Link from "next/link";
import BlogSearch from "../components/BlogSearch";

const categories = [
  { name: "Tech", slug: "tech" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Education", slug: "education" },
];

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-[600px]">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 rounded-lg mr-6">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/blog?category=${category.slug}`}
                className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Search Feature (Bonus) */}
        <div className="mt-6">
          <h3 className="text-md font-medium mb-2">Search Posts</h3>
          <BlogSearch />
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}