'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Add ConvertKit types to window object
declare global {
  interface Window {
    convertkit?: {
      refresh: () => void;
    };
  }
}

export default function NewsletterForm() {
  useEffect(() => {
    // Initialize ConvertKit form
    if (window.convertkit && typeof window.convertkit.refresh === 'function') {
      window.convertkit.refresh();
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="max-w-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Subscribe to the Newsletter
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest investment insights and AI prompts directly in your inbox.
        </p>
        
        <form
          action="https://app.convertkit.com/forms/e527a12c4d/subscriptions"
          className="flex flex-col sm:flex-row gap-2 items-center"
          method="post"
          data-sv-form="e527a12c4d"
          data-uid="e527a12c4d"
          data-format="inline"
          data-version="5"
          data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}}}'
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              name="email_address"
              aria-label="Email Address"
              placeholder="Enter your email"
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 