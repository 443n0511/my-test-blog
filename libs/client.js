import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "my-text-blog",
  apiKey: process.env.API_KEY,
});
