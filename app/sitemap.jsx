export default function sitemap() {
  return [
    {
      url: 'https://https://bibiliamtaani.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },

    {
      url: 'https://https://bibiliamtaani.vercel.app/home',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
  
    {
      url: 'https://https://bibiliamtaani.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: 'https://https://bibiliamtaani.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    
    {
      url: 'https://https://bibiliamtaani.vercel.app/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://https://bibiliamtaani.vercel.app/policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://https://bibiliamtaani.vercel.app/not-found',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
  ]
}