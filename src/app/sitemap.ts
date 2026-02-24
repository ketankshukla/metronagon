import type { MetadataRoute } from "next";

const blogSlugs = [
  "how-i-designed-12-consistent-covers-for-a-fantasy-series",
  "planning-a-5-book-non-fiction-series-from-a-single-topic",
  "the-ai-powered-book-cover-pipeline",
  "creating-30-character-portraits-with-consistent-style",
  "what-makes-a-book-cover-sell",
  "building-a-childrens-picture-book-with-ai-illustration",
  "designing-childrens-paperback-covers-that-stand-out",
  "designing-series-logos-that-anchor-a-brand",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://metronagon.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/examples`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${baseUrl}/case-studies`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
