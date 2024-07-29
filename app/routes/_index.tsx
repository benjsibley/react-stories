import type { MetaFunction, LinksFunction  } from "@remix-run/node";
import {
  Link,
  useLoaderData,
} from "@remix-run/react";

import styles from "~/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export async function loader()  {
  return { message: "That Conference Rocks 🪨🪨🪨" };
}

export default function Index() {
  const { message } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{message}</h1>
      <Link to="/stories">Go to stories</Link>
    </div>
  );
}