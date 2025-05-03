import PATH from '@/constants/paths'
import { Blog, Blogs } from '@/types/blog.types'
import { SuccessResponseApi } from '@/types/utils.types'
import { NextResponse } from 'next/server'

// Giả sử bạn lấy bài viết từ DB hoặc API
async function getBlogs() {
  // Thay bằng fetch từ DB hoặc API thật
  let blogs: Blog[] | [] = []
  try {
    const responeAPI = await fetch(`${process.env.NEXT_PUBLIC_API}/blogs`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!responeAPI.ok) throw new Error('Call api blogs faild!')
    const dataBlog: SuccessResponseApi<Blogs> = await responeAPI.json()
    blogs = dataBlog.data.blogs
  } catch (error) {
    console.error(error)
  }
  return blogs
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const urls = ['/', '/blogs']

  const blogs = await getBlogs()

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

      ${
        blogs.length > 0 &&
        blogs
          .map(
            (item) => `
      <url>
        <loc>${baseUrl}${PATH.BLOGS}/${item.slug}</loc>
        <lastmod>${item.updated_at}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
    `
          )
          .join('')
      }
  </urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
