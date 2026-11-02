import { createFileRoute, redirect } from "@tanstack/react-router";

// The original static site lives in /public; send visitors to its home page.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/home.html" });
  },
  head: () => ({
    meta: [
      { title: "نور الحياة | بوابة القبطية الأرثوذكسية" },
      { name: "description", content: "الكتاب المقدس والأجبية والسنكسار والترانيم في مكان واحد." },
      { property: "og:title", content: "نور الحياة" },
      { property: "og:description", content: "الكتاب المقدس والأجبية والسنكسار والترانيم." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
