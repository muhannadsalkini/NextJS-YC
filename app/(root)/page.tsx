import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  // const posts = await client.fetch(STARTUPS_QUERY);
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "Adrian" },
  //     description: "This is a description",
  //     image:
  //       "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];

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

// Server Side Rendering (SSR): Generates pages on the server for each request, ensuring data is always up-to-date but may increase response time.
// Static Site Generation (SSG): Pre-renders pages at build time, delivering fast load times with static content that doesn’t change per request.
// Incremental Static Regeneration (ISR): Combines SSG and SSR, allowing specific pages to re-generate at set intervals to update content without a full rebuild.
// Partial Pre-rendering (PPR): Renders critical parts of a page at build time and loads non-essential content later to improve perceived load speed.
