# Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Before running the project, make sure to create a `.env.local` file in the root directory and add the following environment variables:

```
AUTH_SECRET="your_auth_secret_here" # Added by `npx auth`. Read more: https://cli.authjs.dev

# GitHub Auth
AUTH_GITHUB_ID="your_github_id_here"
AUTH_GITHUB_SECRET="your_github_secret_here"

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="vX"
SANITY_WRITE_TOKEN="your_sanity_write_token_here"

# Sentry
SENTRY_AUTH_TOKEN="your_sentry_auth_token_here"
```

## Notes

- **Sanity**: A headless content management system (CMS) that provides a flexible and real-time backend for managing structured content, enabling developers to build and deliver dynamic applications across multiple platforms.

- **Type generation (typegen)**: The automated process of creating TypeScript types based on schemas or other source data, ensuring type safety and consistency in code, especially when working with APIs or databases.

- **ESLint**: A static code analysis tool for identifying and fixing problems in JavaScript code. It helps developers enforce coding standards, catch syntax errors, and maintain code quality by providing rules for writing consistent and error-free code.

- **Sentry**: An application monitoring platform that helps developers track, identify, and resolve errors in real-time across their applications and services.

- **Caching in Next.js**: A technique that optimizes performance by storing and retrieving data efficiently, enhancing the speed of web applications.

### Rendering Strategies

- **Server Side Rendering (SSR)**: Generates pages dynamically on the server for each request, ensuring that users always receive the latest data. However, this may lead to increased response times due to server processing.

- **Static Site Generation (SSG)**: Pre-renders pages at build time, resulting in fast load times and delivering static content that does not change per request. This approach is ideal for content that remains relatively constant.

- **Incremental Static Regeneration (ISR)**: Combines the benefits of SSG and SSR by allowing specific pages to be regenerated at defined intervals. This enables content updates without requiring a complete rebuild of the site, ensuring freshness without sacrificing speed.

- **Partial Pre-rendering (PPR)**: Renders critical components of a page at build time while loading non-essential content later. This strategy improves the perceived load speed by prioritizing important information for users.

### Benefits of Caching in Next.js

- **Improved Performance**: Significantly reduces load times and server response times, leading to a more efficient application.
- **Reduced Server Load**: Minimizes redundant requests to the backend, conserving resources and improving scalability.
- **Enhanced User Experience**: Delivers faster page loads and smoother interactions, resulting in a more satisfying user experience overall.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
