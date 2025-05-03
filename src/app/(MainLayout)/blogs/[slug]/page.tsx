import PATH from '@/constants/paths'
import { Blog } from '@/types/blog.types'
import { SuccessResponseApi } from '@/types/utils.types'
import { getIdFromNameId } from '@/utils/commons'
import Link from 'next/link'

interface Props {
  params: Promise<{
    slug: string
  }>
}

async function getBlogDetail(slug: string) {
  const id = getIdFromNameId(slug)
  let blog: Blog | null = null
  try {
    const responeAPI = await fetch(`${process.env.NEXT_PUBLIC_API}/blogs/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!responeAPI.ok) throw new Error('Call api blog detail faild!')
    const dataBlog: SuccessResponseApi<Blog> = await responeAPI.json()
    blog = dataBlog.data
  } catch (error) {
    console.error(error)
  }
  return blog
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const data = await getBlogDetail(slug)
  if (data) {
    return {
      title: data.seo_title,
      keywords: data.seo_keywords,
      description: data.seo_description,
      icons: {
        icon: `${process.env.NEXT_PUBLIC_BASE_URL}/images/favicon.png`
      },
      openGraph: {
        title: data.seo_title,
        description: data.seo_description,
        url: process.env.NEXT_PUBLIC_BASE_URL,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/seo.jpg`,
            width: 200,
            height: 200,
            alt: data.seo_title
          }
        ],
        locale: 'vi_VN',
        type: 'website'
      },
      twitter: {
        card: 'summary_large_image',
        title: data.seo_title,
        description: data.seo_description,
        images: [`${process.env.NEXT_PUBLIC_BASE_URL}/images/seo.jpg`]
      }
    }
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const blog = await getBlogDetail(slug)
  if (!blog) return
  return (
    <div className='wrap-content'>
      <div className='flex h-20 items-center'>
        <Link
          className='group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
          href={PATH.BLOGS}
          title='Back'
        >
          <svg
            viewBox='0 -9 3 24'
            className='mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
          >
            <path
              d='M3 0L0 3L3 6'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          Quay về
        </Link>
      </div>
      <h1 className='text-2xl font-extrabold tracking-tight  lg:text-3xl '>{blog.title}</h1>
      <article className='overflow-hidden mt-7' dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  )
}
