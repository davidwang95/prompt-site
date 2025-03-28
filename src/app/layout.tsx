import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Plus, Search, Twitter } from "lucide-react";
import BackToTop from "@/components/BackToTop";
import Analytics from "@/components/Analytics";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#2563eb'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://finprompter.com'),
  title: {
    default: "FinPrompter.com - AI Prompts for Investment Professionals",
    template: "%s | FinPrompter"
  },
  description: "Expert-crafted AI prompts for investment professionals. Get instant market analysis, research insights, and financial recommendations using ChatGPT and Claude.",
  keywords: ["AI prompts", "investment", "finance", "ChatGPT", "market analysis", "trading", "investment research"],
  authors: [{ name: "Dave Wang" }],
  creator: "Dave Wang",
  publisher: "FinPrompter",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb'
      }
    ]
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finprompter.com",
    siteName: "FinPrompter",
    title: "FinPrompter - AI Prompts for Investment Professionals",
    description: "Expert-crafted AI prompts for investment professionals. Get instant market analysis, research insights, and financial recommendations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinPrompter - AI Prompts for Investment Professionals"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@DaveWangMIA",
    creator: "@DaveWangMIA",
    images: "/og-image.png",
    title: "FinPrompter - AI Prompts for Investment Professionals",
    description: "Expert-crafted AI prompts for investment professionals. Get instant market analysis, research insights, and financial recommendations."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <Analytics />
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
                  <a href="https://www.tokenbrief.xyz" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/by-dave-wang.png"
                      alt="By Dave Wang"
                      width={120}
                      height={24}
                      className="hidden sm:block h-8 sm:h-10 w-auto"
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
          <footer className="mt-auto py-8 text-center">
            <p className="text-gray-600 mb-4">
              Disclaimer: These prompts are tools to enhance your research process, not financial advice
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="https://tokenbrief.xyz" className="flex items-center gap-2 text-gray-600">
                <Image
                  src="/by-dave-wang.png"
                  alt="By Dave Wang"
                  width={120}
                  height={24}
                  className="h-8 w-auto"
                />
              </Link>
              <a
                href="https://x.com/DaveWangMIA/articles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/davewangmia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dave.wang@tokenbrief.xyz"
                className="text-gray-600 hover:text-gray-800"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-500 mt-4">
              This entire site was created with AI - follow me for advanced AI techniques and market insights
            </p>
          </footer>

          {/* Back to Top Button */}
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
