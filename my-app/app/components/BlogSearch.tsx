"use client";

import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function BlogSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch posts for search functionality
    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data.slice(0, 20)); // Limit to first 20 posts for performance
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    // Filter posts based on search term
    if (searchTerm.trim() === "") {
      setFilteredPosts([]);
      return;
    }

    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPosts(filtered.slice(0, 5)); // Limit results to 5
  }, [searchTerm, posts]);

  if (isLoading) {
    return <div className="text-sm text-gray-500">Loading posts...</div>;
  }

  return (
    <div className="space-y-3">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      
      {searchTerm && filteredPosts.length > 0 && (
        <div className="space-y-2">
          {filteredPosts.map((post) => (
            <div key={post.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
              <a
                href={`/blog/${post.id}`}
                className="block hover:underline"
              >
                <h4 className="font-medium text-sm text-blue-600 dark:text-blue-400">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                  {post.body}
                </p>
              </a>
            </div>
          ))}
        </div>
      )}
      
      {searchTerm && filteredPosts.length === 0 && (
        <div className="text-sm text-gray-500 dark:text-gray-400">
          No posts found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}