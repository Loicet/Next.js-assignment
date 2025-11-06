"use client";

import { useState, useEffect } from "react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time
    setCurrentTime(new Date());
    
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (!currentTime) {
    return <div className="text-gray-500">Loading time...</div>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Current Date & Time</h3>
      <div className="space-y-1">
        <p className="text-gray-700">
          <strong>Date:</strong> {currentTime.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <p className="text-gray-700">
          <strong>Time:</strong> {currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          This component updates every second using Client-Side Rendering (CSR)
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Welcome Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Next.js Assignment
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This project demonstrates various Next.js rendering techniques including SSR, SSG, ISR, and CSR.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn About the Author
          </a>
          <a
            href="/blog"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Read Blog Posts
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Rendering Techniques Demonstrated
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">SSR</h3>
            <p className="text-gray-600 text-sm">Server-Side Rendering used in the About page</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-600 mb-2">SSG</h3>
            <p className="text-gray-600 text-sm">Static Site Generation used in the Blog list</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-yellow-600 mb-2">ISR</h3>
            <p className="text-gray-600 text-sm">Incremental Static Regeneration for individual posts</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">CSR</h3>
            <p className="text-gray-600 text-sm">Client-Side Rendering for dynamic content below</p>
          </div>
        </div>
      </section>

      {/* CSR Date/Time Component */}
      <section>
        <CurrentTime />
      </section>
    </div>
  );
}
