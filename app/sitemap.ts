import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/customer-support",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/customer-login",
  "/request-call",
  "/policy-review",
  "/renewal-assistance",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nilagautam.example.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
