import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Plus, Search } from "lucide-react";
import BackToTop from "@/components/BackToTop";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "FinPrompter.com",
  description: "A curated collection of AI prompts for investment professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script 
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gray-50">
          {/* Top Banner */}
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-14 sm:h-16">
                <Link href="/" className="text-xl font-bold text-gray-900">
                  <Image 
                    src="/finprompterlogo.png"
                    alt="FinPrompter Logo"
                    width={200}
                    height={40}
                    priority
                  />
                </Link>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  {/* Search Button */}
                  <Link
                    href="/search"
                    className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-600 group"
                    role="button"
                    aria-label="Search prompts"
                  >
                    <Search className="h-4 w-4 mr-2 group-hover:text-blue-500" />
                    <span className="hidden sm:inline group-hover:text-blue-500">Search Prompts</span>
                  </Link>
                  <form
                    action="https://app.convertkit.com/forms/e527a12c4d/subscriptions"
                    className="hidden sm:flex items-center gap-2 mr-4"
                    method="post"
                    data-sv-form="e527a12c4d"
                    data-uid="e527a12c4d"
                    data-format="inline"
                    data-version="5"
                  >
                    <input
                      type="email"
                      name="email_address"
                      aria-label="Email Address"
                      placeholder="Get weekly prompting tips"
                      required
                      className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                  <a href="https://www.tokenbrief.xyz" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/by-dave-wang.png"
                      alt="By Dave Wang"
                      width={120}
                      height={24}
                      className="h-8 sm:h-10 w-auto"
                    />
                  </a>
                  <a href="https://x.com/DaveWangMIA/articles" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X (Twitter)</span>
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/davewangmia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.tokenbrief.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <p className="text-gray-600">
                  Disclaimer: These prompts are tools to enhance your research process, not financial advice
                </p>
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/by-dave-wang.png"
                    alt="By Dave Wang"
                    width={120}
                    height={24}
                    className="h-8 w-auto"
                  />
                  <div className="flex items-center space-x-2">
                    <a href="https://x.com/DaveWangMIA/articles" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">X (Twitter)</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/davewangmia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="mailto:dave@tokenbrief.xyz" className="text-gray-400 hover:text-gray-500">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  This entire site was created with AI - follow me for advanced AI techniques and market insights
                </p>
                <Link
                  href="/submit"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Share Your Best Prompt
                </Link>
              </div>
            </div>
          </footer>

          {/* Back to Top Button */}
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
