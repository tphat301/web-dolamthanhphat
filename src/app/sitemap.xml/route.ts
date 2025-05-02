import { NextResponse } from 'next/server'

// Giả sử bạn lấy bài viết từ DB hoặc API
async function getBlogPosts() {
  // Thay bằng fetch từ DB hoặc API thật
  return [
    { slug: 'bai-viet-1', updatedAt: '2024-12-10T10:00:00Z' },
    { slug: 'bai-viet-2', updatedAt: '2024-12-15T08:30:00Z' }
  ]
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const urls = ['/', '/blogs']

  const posts = await getBlogPosts()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>${url === '/' ? '1.0' : '0.9'}</priority>
      </url>
    `
      )
      .join('')}

      ${posts
        .map(
          (post) => `
      <url>
        <loc>${baseUrl}/blog/${post.slug}</loc>
        <lastmod>${post.updatedAt}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
    `
        )
        .join('')}
  </urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
