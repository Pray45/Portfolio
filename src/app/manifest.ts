import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pray Patel — Software Developer & CS Engineer",
    short_name: "Pray Patel",
    description:
      "Pray Patel — Computer Science Engineer & Software Developer building products, systems, and infrastructure tooling. GDG Campus Lead.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0d0b",
    theme_color: "#0e0d0b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/me.png",
        sizes: "192x192 512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
