import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://praypatel.dev";

export const viewport: Viewport = {
  themeColor: "#0e0d0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pray Patel — Computer Science Engineer & Software Developer",
    template: "%s | Pray Patel",
  },
  description:
    "Pray Patel — Computer Science Engineer & Software Developer building products, systems, and infrastructure tooling. GDG on Campus Lead.",
  applicationName: "Pray Patel Portfolio",
  authors: [{ name: "Pray Patel", url: "https://github.com/Pray45" }],
  generator: "Next.js",
  keywords: [
    "Pray Patel",
    "Pray Patel Portfolio",
    "Pray Patel Developer",
    "Software Developer",
    "Computer Science Engineer",
    "Full Stack Developer",
    "Systems Engineer",
    "Infrastructure Tooling",
    "GDG Campus Lead",
    "GDG on Campus Patan",
    "Stakker",
    "Nimbus",
    "MoonLit",
    "Next.js Developer",
    "Go Developer",
    "Docker",
    "Kubernetes",
    "Redis",
    "System Design",
    "India Software Engineer",
  ],
  creator: "Pray Patel",
  publisher: "Pray Patel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: "Pray Patel — Computer Science Engineer & Software Developer",
    description:
      "Pray Patel — Computer Science Engineer & Software Developer building products, systems, and infrastructure tooling. GDG on Campus Lead.",
    siteName: "Pray Patel Portfolio",
    firstName: "Pray",
    lastName: "Patel",
    username: "Pray45",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pray Patel — Computer Science Engineer & Software Developer",
    description:
      "Pray Patel — Computer Science Engineer & Software Developer building products, systems, and infrastructure tooling. GDG on Campus Lead.",
    creator: "@Pray45",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Software Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${jetbrainsMono.variable}`} data-theme="ponytail">
      <body className={`min-h-full flex flex-col ${jetbrainsMono.className}`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

