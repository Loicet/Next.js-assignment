import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Assignment",
  description: "A Next.js assignment demonstrating various rendering techniques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="min-h-screen flex flex-col">
            {/* Navigation */}
       <nav className="border-b bg-white border-gray-200">
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

            {/* Main Content */}
            <main className="min-h-screen">
              {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200  bg-white">
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
      </body>
    </html>
  );
}
