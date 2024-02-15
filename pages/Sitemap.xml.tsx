import { getAllProjects } from 'lib/project.client'
import { getClient } from 'lib/sanity.client'

type SitemapLocation = {
  url: string
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority: number
  lastmod?: Date
}

// Use this to manually add routes to the sitemap
const defaultUrls: SitemapLocation[] = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1,
    lastmod: new Date(), // or custom date: '2023-06-12T00:00:00.000Z',
  },
  { url: '/projects', priority: 0.7, changefreq: 'weekly' },
  { url: '/experiences', priority: 0.5 },
]

const createSitemap = (locations: SitemapLocation[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL // Make sure to configure this
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations
        .map((location) => {
          return `<url>
                    <loc>${baseUrl}${location.url}</loc>
                    <priority>${location.priority}</priority>
                    ${
                      location.lastmod
                        ? `<lastmod>${location.lastmod.toISOString()}</lastmod>`
                        : ''
                    }
                  </url>`
        })
        .join('')}
  </urlset>
  `
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const client = getClient()

  // Get list of Projects urls
  const [projects = []] = await Promise.all([getAllProjects(client)])
  const postUrls: SitemapLocation[] = projects
    .filter(({ slug = '' }) => slug)
    .map((post) => {
      return {
        url: `/projects/${post.slug}`,
        priority: 0.7,
        lastmod: new Date(post._updatedAt),
      }
    })

  // ... get more routes here

  // Return the default urls, combined with dynamic urls above
  const locations = [...defaultUrls, ...postUrls]

  // Set response to XML
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(locations))
  res.end()

  return {
    props: {},
  }
}
