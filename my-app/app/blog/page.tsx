import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogster",
  description: "Blog posts page with list of all posts",
};

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      
      <div className="grid gap-4">
        {posts.slice(0, 10).map((post) => (
          <article key={post.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">
              <Link 
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 line-clamp-3">
              {post.body}
            </p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <span>By User #{post.userId}</span>
              <Link 
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>Note:</strong> This page uses Static Site Generation (SSG) to fetch blog posts at build time.
        </p>
      </div>
    </div>
  );
}