import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          {" "}
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      {/* startup cards */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      {/* <SanityLive /> */}
    </>
  );
}

// Sanity: is a headless content management system (CMS) that provides a flexible and real-time backend for managing structured content, enabling developers to build and deliver dynamic applications across multiple platforms.

// Type generation (typegen): is the automated process of creating TypeScript types based on schemas or other source data, ensuring type safety and consistency in code, especially when working with APIs or databases.

// ESLint: is a static code analysis tool for identifying and fixing problems in JavaScript code. It helps developers enforce coding standards, catch syntax errors, and maintain code quality by providing rules for writing consistent and error-free code.

// Sentry: is an application monitoring platform that helps developers track, identify, and resolve errors in real-time across their applications and services.

// Caching in Next.js is a technique that optimizes performance by storing and retrieving data efficiently, enhancing the speed of web applications.

// * Server Side Rendering (SSR):
// Generates pages dynamically on the server for each request, ensuring that users always receive the latest data. However, this may lead to increased response times due to server processing.

// * Static Site Generation (SSG):
// Pre-renders pages at build time, resulting in fast load times and delivering static content that does not change per request. This approach is ideal for content that remains relatively constant.

// * Incremental Static Regeneration (ISR):
// Combines the benefits of SSG and SSR by allowing specific pages to be regenerated at defined intervals. This enables content updates without requiring a complete rebuild of the site, ensuring freshness without sacrificing speed.

// * Partial Pre-rendering (PPR):
// Renders critical components of a page at build time while loading non-essential content later. This strategy improves the perceived load speed by prioritizing important information for users.

// Benefits of Caching in Next.js:
// * Improved Performance: Significantly reduces load times and server response times, leading to a more efficient application.
// * Reduced Server Load: Minimizes redundant requests to the backend, conserving resources and improving scalability.
// * Enhanced User Experience: Delivers faster page loads and smoother interactions, resulting in a more satisfying user experience overall.
