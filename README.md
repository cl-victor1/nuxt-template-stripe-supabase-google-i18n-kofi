# Nuxt Template with Stripe, Supabase, Google Auth, i18n, and Ko-fi Integration

<div align="center">
  <a href="README.md">English</a> | <a href="README_zh.md">中文</a>
    </div>

## Introduction
This template provides a ready-to-use starter kit for building Nuxt.js applications with essential third-party integrations. It's designed to streamline the setup process for projects that need subscription management, internationalization, authentication, and donation functionality.

## Features

- **Stripe Integration**: Easily manage payments and subscriptions with Stripe.
- **Supabase Integration**: Leverage Supabase for scalable backend services, including real-time databases and authentication.
- **Google Auth**: Enable secure and fast authentication via Google OAuth.
- **i18n (Internationalization)**: Provide multilingual support with Vue I18n, making your app accessible globally.
- **Ko-fi Donations**: Seamlessly integrate Ko-fi for community-supported contributions and donations.
- **Google Analytics**: Built-in Google Analytics integration for tracking user behavior and site performance.
- **Product Hunt Badge**: Showcase your product with an embedded Product Hunt badge for increased visibility and credibility.
- **Vercel Analytics**: Integrated Vercel Analytics plugin for advanced performance monitoring and insights.
- **Cursor AI Support**: Includes a `.cursorrules` file in the root directory to enhance code writing with Cursor AI.



## Prerequisites

- Node.js (v14 or later)
- npm or pnpm
- Stripe account
- Supabase account
- Google Cloud Console project with OAuth 2.0 credentials
- Ko-fi account (optional)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/cl-victor1/nuxt-template-stripe-supabase-google-i18n-kofi.git
   cd nuxt-template-stripe-supabase-google-i18n-kofi
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you're using pnpm:
   ```
   pnpm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   OPENAI_API_KEY=your_openai_api_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   STRIPE_SERVER_KEY=your_stripe_server_key
   STRIPE_CLIENT_KEY=your_stripe_client_key
   GOOGLE_CLIENT_ID=your_google_client_id
   PUBLIC_URL=your_public_url
   ```

   Replace `your_*` with your actual credentials and URLs.

4. Update the configuration files:

   - In `app.vue`, replace the Google Analytics ID:
   
   ```typescript
   const gaScript = document.createElement('script')
  gaScript.async = true
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXXXXX' // Change to your own Google Analytics ID
  document.body.appendChild(gaScript)

  gaScript.onload = () => {
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXXXXXXXX') // Change to your own Google Analytics ID
  }
   ```

   - In `app.vue`, update the Ko-fi widget configuration:
   
   ```typescript
   // Change to your own Ko-fi link
   const kofiScript = document.createElement('script');
   kofiScript.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
   kofiScript.onload = () => {
     // Initialize Ko-fi widget after script is loaded
     window.kofiWidgetOverlay.draw('buy_victor_a_coffee', {
       'type': 'floating-chat',
       'floating-chat.donateButton.text': 'Support me',
       'floating-chat.donateButton.background-color': '#00b9fe',
       'floating-chat.donateButton.text-color': '#fff'
     });
   };
   ```

5. Customize the content:
   - Update the service name, description, and other text throughout the application. Look for comments like "Change to your own ..." and replace the placeholder text with your own information.
   - Replace the logo and favicon in the `public` directory with your own assets.

6. Update the i18n translations in `i18n.config.ts` to match your service's content.

7. Set up your Stripe products and prices, then update the price IDs in `pages/price.vue`:
   
   ```vue
   <button @click="() => handleCheckout('price_xxxx')" id="checkout-button-basic" class="h-10 text-sm font-medium rounded text-blue-900 text-center w-full bg-white active:scale-95 transition-transform">Choose this plan</button>
   ```
   
   ```vue
   <button @click="() => handleCheckout('price_xxxx')" id="checkout-button-pro" class="h-10 text-sm font-medium rounded text-blue-900 text-center w-full bg-white active:scale-95 transition-transform">Choose this plan</button>
   ```

8. Configure your Supabase database and update any related API calls in the server directory.

9. Set up Google OAuth 2.0 credentials in the Google Cloud Console and ensure the authorized JavaScript origins and redirect URIs are correctly set.



## Running the Application

To run the application in development mode:

```
npm run dev
```

or with pnpm:

```
pnpm run dev
```


## Building for Production

To build the application for production:

```
npm run build
```

or with pnpm:

```
pnpm run build
```


## Deployment

This template is configured for easy deployment on Vercel. Make sure to set up your environment variables in your Vercel project settings.

For other hosting platforms, refer to their respective documentation for deploying Nuxt 3 applications.

## Customization

- Tailwind CSS: The template uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.
- Components: Add or modify components in the `components` directory.
- Pages: Update or add new pages in the `pages` directory.
- API Routes: Server-side API routes are located in the `server/api` directory.

## Important Notes

- Always replace placeholder content, especially in legal pages like Terms of Service, Privacy Policy, and Refund Policy.
- Ensure all API keys and sensitive information are kept secure and not committed to version control.
- Test thoroughly, especially payment flows and authentication, before going live.

## Support

For any questions or issues, please open an issue in the GitHub repository or contact the template maintainer.

## License

[MIT License](LICENSE)



