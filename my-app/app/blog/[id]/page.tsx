import { Metadata } from "next";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";

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
    title: `${post.title} - Blogster`,
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded"></div>
            <span className="text-xl font-bold text-gray-900">Blogster</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Articles</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">About</a>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <a href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-sm font-medium">
          <ArrowLeft size={16} />
          Back to Articles
        </a>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{user.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Dec 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>5 min read</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed space-y-4">
            {post.body.split('\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="border-t border-gray-200 pt-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Written by {user.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {user.email}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Writer and developer sharing thoughts on building great products and living a creative life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/1" className="block group">
              <article className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-gray-600">
                  Building for the Long Term
                </h4>
                <p className="text-sm text-gray-600">
                  Why sustainable practices matter more than quick wins.
                </p>
              </article>
            </a>
            
            <a href="/blog/2" className="block group">
              <article className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-gray-600">
                  The Art of Simplicity
                </h4>
                <p className="text-sm text-gray-600">
                  How removing features can make your product better.
                </p>
              </article>
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gray-900 rounded"></div>
                <span className="font-bold text-gray-900">Blogster</span>
              </div>
              <p className="text-sm text-gray-500">
                © 2025 All rights reserved.
              </p>
            </div>
            <div className="flex gap-8">
              <a href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Articles</a>
              <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
              <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Configure ISR with 60 second revalidation period
export const revalidate = 60;