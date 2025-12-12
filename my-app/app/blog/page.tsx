import { Metadata } from "next";
import { ArrowRight, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Articles - Blogster",
  description: "Read articles about software development, design, and creativity",
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
  const displayPosts = posts.slice(0, 10);

  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium mb-4 inline-block">
            ← Back to Home
          </a>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            All Articles
          </h1>
          <p className="text-xl text-gray-600">
            Thoughts on software, design, and building great products.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {displayPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <a href={`/blog/${post.id}`} className="group block">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-gray-500">Dec {post.id}, 2025</span>
                  <span className="text-sm text-gray-400">·</span>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors capitalize">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {post.body}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By User #{post.userId}</span>
                  <span className="text-gray-900 font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                    Read more
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}