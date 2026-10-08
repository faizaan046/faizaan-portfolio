# Portfolio Website

A fast, highly-accessible, statically-generated portfolio built with Next.js App Router, React, and Tailwind CSS. Designed with an editorial, minimalist aesthetic.

## Features

- **Modern Stack:** Next.js 14/15, React 19, Tailwind CSS 4.
- **Fast:** Fully statically generated where possible for maximum performance.
- **Accessible:** Developed with WCAG guidelines in mind. Semantic HTML, proper focus states, ARIA landmarks, and keyboard navigable.
- **Serverless Contact Form:** Built-in form handling via Next.js API Routes, delivering messages via Resend.
- **Spam Protection:** Automated protection with Cloudflare Turnstile and a built-in honeypot.
- **Content-Driven:** All projects, skills, and personal information are centrally managed in `src/data/portfolio.ts`.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment variables and fill in your credentials:
   ```bash
   cp .env.example .env.local
   ```

### Configuration

You need to provide your API keys to enable the contact form.

1. **Resend (Email Delivery):**
   - Create an account at [Resend](https://resend.com).
   - Verify your domain.
   - Generate an API key and add it to `RESEND_API_KEY`.
   - Set `CONTACT_EMAIL` to your inbox address.
   - Set `CONTACT_FROM_EMAIL` to the address verified in Resend.

2. **Cloudflare Turnstile (Spam Protection):**
   - Create a site in [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile).
   - Add your domains (e.g., `localhost` for development, your production domain).
   - Copy the Site Key to `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
   - Copy the Secret Key to `TURNSTILE_SECRET_KEY`.

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment

This project is optimized for deployment on Vercel.

1. Push your code to GitHub.
2. Import the project in Vercel.
3. In the Vercel dashboard, navigate to **Settings > Environment Variables** and add all variables from `.env.local`.
4. Deploy!

### Missing Assets Checklist

Before launching, verify you have added:
- Profile picture to `public/images/projects/` and updated `src/data/portfolio.ts`.
- Screenshots for your 3 featured projects.
- `resume.pdf` to `public/resume/resume.pdf` (Already completed).
- Correct GitHub and Demo URLs for all projects in `src/data/portfolio.ts`.
