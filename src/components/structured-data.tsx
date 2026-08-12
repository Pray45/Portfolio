import { identity, projects, social, timeline } from "@/data/content";

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://praypatel.dev";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: identity.name,
    alternateName: ["Pray", "Pray Patel", "Pray45", "pray"],
    jobTitle: identity.role,
    description:
      "Computer Science Engineer and Software Developer specializing in full-stack products, systems, and infrastructure tooling. GDG on Campus Lead.",
    url: baseUrl,
    image: `${baseUrl}/me.png`,
    email: social.email,
    sameAs: [social.github, social.linkedin],
    alumnusOf: {
      "@type": "EducationalOrganization",
      name: "Government Engineering College, Patan",
    },
    memberOf: timeline.map((t) => ({
      "@type": "Organization",
      name: t.org,
      roleName: t.role,
    })),
    knowsAbout: [
      "Computer Science",
      "Software Development",
      "Full Stack Development",
      "Systems Architecture",
      "Infrastructure Engineering",
      "DevOps",
      "Distributed Systems",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Go (Golang)",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Cloud Computing",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Pray Patel — Software Developer & CS Engineer",
    alternateName: "Pray Patel Portfolio",
    description:
      "Official portfolio of Pray Patel — Computer Science Engineer & Software Developer building full-stack products, systems, and infrastructure tooling.",
    author: {
      "@id": `${baseUrl}/#person`,
    },
    inLanguage: "en-US",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${baseUrl}/#profilepage`,
    url: baseUrl,
    name: "Pray Patel Portfolio",
    mainEntity: {
      "@id": `${baseUrl}/#person`,
    },
    about: {
      "@id": `${baseUrl}/#person`,
    },
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.name,
        description: p.description,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        author: {
          "@id": `${baseUrl}/#person`,
        },
        keywords: p.stack.join(", "),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}
