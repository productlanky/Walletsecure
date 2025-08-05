import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "e7iqr9gm",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
