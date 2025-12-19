"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Mail, BookOpen, Sparkles } from "lucide-react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!currentTime) {
    return <div className="animate-pulse bg-gray-100 h-16 rounded-lg"></div>;
  }

  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="text-gray-700" size={18} />
        <span className="text-sm font-medium text-gray-600">Current Time</span>
      </div>
      <p className="text-2xl font-bold text-gray-900">
        {currentTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })}
      </p>
      <p className="text-sm text-gray-500 mt-1">
        {currentTime.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric'
        })}
      </p>
    </div>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={20} className="text-gray-900" />
            <span className="text-sm font-medium text-gray-600">Weekly Updates</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Thoughts on software, design, and life
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Writing about web development, product design, and the creative process. 
            Subscribe to get new posts delivered to your inbox.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              Read Articles
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 font-medium inline-flex items-center gap-2"
            >
              <BookOpen size={18} />
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="text-gray-900" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Stay Updated</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join 2,000+ readers getting thoughtful insights on building great products and living a creative life.
            </p>
            
            {!subscribed ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 text-green-900 px-4 py-3 rounded-lg font-medium">
                ✓ Successfully subscribed! Check your inbox.
              </div>
            )}
            
            <p className="text-sm text-gray-500 mt-3">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Posts</h2>
        <div className="space-y-6">
          <Link href="/blog/post-1" className="block group">
            <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-gray-500">Dec 8, 2025</span>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-sm text-gray-500">5 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                Building for the Long Term
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Why sustainable practices and thoughtful architecture matter more than quick wins.
              </p>
            </article>
          </Link>

          <Link href="/blog/post-2" className="block group">
            <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-gray-500">Dec 1, 2025</span>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-sm text-gray-500">7 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                The Art of Simplicity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                How removing features can make your product better, not worse.
              </p>
            </article>
          </Link>

          <Link href="/blog/post-3" className="block group">
            <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-gray-500">Nov 24, 2025</span>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-sm text-gray-500">4 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                Design Systems That Scale
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creating consistency without sacrificing creativity in growing teams.
              </p>
            </article>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-gray-900 font-medium hover:text-gray-600 inline-flex items-center gap-2">
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Live Clock Demo */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-sm">
          <CurrentTime />
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}