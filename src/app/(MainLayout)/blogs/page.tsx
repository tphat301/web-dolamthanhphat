import { AuroraText } from '@/components/magicui/aurora-text'
import PATH from '@/constants/paths'
import { SEO_PAGE } from '@/constants/seoPage'
import { Blog, Blogs } from '@/types/blog.types'
import { SuccessResponseApi } from '@/types/utils.types'
import { covertISOToDate, generateNameId } from '@/utils/commons'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: SEO_PAGE.TITLE_BLOG,
  keywords: SEO_PAGE.KEYWORDS_BLOG,
  description: SEO_PAGE.DESCRIPTION_BLOG,
  openGraph: {
    title: SEO_PAGE.TITLE_BLOG,
    description: SEO_PAGE.DESCRIPTION_BLOG,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${PATH.BLOGS}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/seo.jpg`,
        width: SEO_PAGE.WIDTH_IMAGE,
        height: SEO_PAGE.HEIGHT_IMAGE,
        alt: SEO_PAGE.TITLE_BLOG
      }
    ],
    locale: 'vi_VN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_PAGE.TITLE_BLOG,
    description: SEO_PAGE.DESCRIPTION_BLOG,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/seo.jpg`,
        width: SEO_PAGE.WIDTH_IMAGE,
        height: SEO_PAGE.HEIGHT_IMAGE,
        alt: SEO_PAGE.TITLE_BLOG
      }
    ]
  }
}

export default async function BlogsPage() {
  let blogs: Blog[] | null = null
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
  if (!blogs) return
  return (
    <div className='wrap-content mn:py-10 lg:py-16 overflow-hidden'>
      <h1 className='text-center'>
        <AuroraText className='font-bold mn:text-2xl lg:text-4xl capitalize tracking-wider mb-2'>
          Đỗ Lâm Thành Phát Blog
        </AuroraText>
      </h1>
      <p className='text-center text-base'>Các bài viết liên quan đến lập trình</p>
      <main className='lg:mt-10 mn:mt-6 mx-auto max-w-[52rem] lg:max-w-6xl'>
        <div>
          <div className='relative sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]'>
            <div className='absolute top-3 bottom-0 right-full mr-7 hidden w-px  sm:block md:mr-[3.25rem]'></div>
            <div className='space-y-16'>
              {blogs.map((item) => (
                <article key={item._id} className='group relative'>
                  <div className='absolute -inset-y-2.5 -inset-x-4 dark:group-hover:bg-accent/40 group-hover:bg-accent sm:rounded-2xl md:-inset-y-4 md:-inset-x-6' />
                  <svg
                    viewBox='0 0 9 9'
                    className='text-prose-body absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible sm:block md:mr-12'
                  >
                    <circle cx='4.5' cy='4.5' r='4.5' stroke='currentColor' strokeWidth={2} />
                  </svg>
                  <div className='relative '>
                    <h2 className='pt-8 text-base font-semibold tracking-tight  lg:pt-0 text-prose-heading'>
                      {item.title}
                    </h2>
                    <div className=' z-10 mt-2 mb-4 line-clamp-2 text-prose-body'>
                      <p>{item.description}</p>
                    </div>
                    <dl className='absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]'>
                      <dt className='sr-only'>Date</dt>
                      <dd className='whitespace-nowrap text-sm text-muted-foreground'>
                        <time>{covertISOToDate(item.created_at.toString())}</time>
                      </dd>
                    </dl>
                  </div>
                  <Link
                    className='flex items-center text-sm font-medium text-prose-link'
                    title='[Hướng dẫn full] Deploy website Next.Js hoặc Node.Js lên VPS'
                    href={`${PATH.BLOGS}/${generateNameId({ name: item.title, id: item._id })}`}
                  >
                    <span className='absolute -inset-y-2.5 -inset-x-4 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6' />
                    <span className='relative'>
                      Đọc thêm
                      <span className='sr-only'>, {item.title}</span>
                    </span>
                    <svg
                      className='relative mt-px ml-2.5 overflow-visible text-prose-link'
                      width={3}
                      height={6}
                      viewBox='0 0 3 6'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M0 0L3 3L0 6' />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
