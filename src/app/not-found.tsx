'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Separate component that uses useSearchParams
function SearchParamsComponent() {
  // This will be wrapped in Suspense
  useSearchParams();
  return null;
}

function NotFoundContent() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Page not found</h1>
          <p className="mt-4 text-lg text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link 
            href="/"
            className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <>
      <Suspense>
        <SearchParamsComponent />
      </Suspense>
      <NotFoundContent />
    </>
  );
} 