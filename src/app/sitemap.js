export default function sitemap() {
  const baseUrl = 'https://abenzo.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Removed anchor links (#services, etc) as they are not separate pages 
    // and are ignored by Google Search Console in sitemaps.
  ];
}