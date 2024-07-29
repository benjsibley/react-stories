import contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "4a9utyi0nsjf",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "u62CpQXhu812xQDcKn4BYVguehCiD0HzTY8XN8l1QoI",
});

export default client;
