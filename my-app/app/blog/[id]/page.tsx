import { Metadata } from "next";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}

// Generate static params for all possible blog post IDs
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();
  
  return posts.slice(0, 10).map((post) => ({
    id: post.id.toString(),
  }));
}

// Fetch individual post data
async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  
  return res.json();
}

// Fetch user data for the post author
async function getUser(userId: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }
  
  return res.json();
}

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const post = await getPost(params.id);
  
  return {
    title: `${post.title} - Next.js Assignment`,
    description: post.body.slice(0, 160),
  };
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const post = await getPost(params.id);
  const user = await getUser(post.userId);

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link 
          href="/blog"
          className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
        >
          ← Back to Blog
        </Link>
      </nav>
      
      <article className="bg-white shadow-lg rounded-lg p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <span>By {user.name}</span>
            <span className="mx-2">•</span>
            <span>{user.email}</span>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.body}
          </p>
        </div>
        
        <footer className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <p>Written by {user.name}</p>
              <p>User ID: #{post.userId}</p>
            </div>
            <div className="text-sm text-gray-500">
              Post ID: #{post.id}
            </div>
          </div>
        </footer>
      </article>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> This page uses Incremental Static Regeneration (ISR) to fetch post data at request time with a revalidation period.
        </p>
      </div>
    </div>
  );
}

// Configure ISR with 60 second revalidation period
export const revalidate = 60;