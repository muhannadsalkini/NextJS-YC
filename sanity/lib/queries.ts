import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
  _id, title, views, description, _ceratedAt, author ->{_id, name, image}, category, image
}
`);
