import type { APIRoute } from "astro";
import { getConfigurationCollection, toAbsoluteUrl } from "../lib/utils";

export const prerender = true;

export const GET: APIRoute = async () => {
  const { data: config } = await getConfigurationCollection();
  const body = `User-agent: *
Allow: /
Sitemap: ${toAbsoluteUrl("/sitemap.xml", config.site.baseUrl)}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
