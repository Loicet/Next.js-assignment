import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

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
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-blue-600 dark:bg-blue-800 text-white p-4">
              <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                  Next.js Assignment
                </Link>
                <div className="flex items-center space-x-6">
                  <ul className="flex space-x-6">
                    <li>
                      <Link href="/" className="hover:text-blue-200 transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:text-blue-200 transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-blue-200 transition-colors">
                        Blog
                      </Link>
                    </li>
                  </ul>
                  <ThemeToggle />
                </div>
              </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto p-4">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 dark:bg-gray-900 text-white p-4 mt-auto">
              <div className="container mx-auto text-center">
                <p>&copy; 2024 Next.js Assignment. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
