import PATH from '@/app/constants/paths'
import Link from 'next/link'

/**
 * 
 * export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const product = await getProductDetail(slug)
  if (product) {
    return {
      title: product.seo_title,
      keywords: product.seo_keywords,
      description: product.seo_description,
      openGraph: {
        title: product.seo_title,
        description: product.seo_description,
        url: process.env.NEXT_PUBLIC_BASE_URL,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/anh-seo-page-website.jpg`,
            width: SEO_PAGE.IMAGE_WIDTH,
            height: SEO_PAGE.IMAGE_HEIGHT,
            alt: product.seo_title
          }
        ],
        locale: 'vi_VN',
        type: 'website'
      },
      twitter: {
        card: 'summary_large_image',
        title: product.seo_title,
        description: product.seo_description,
        images: [`${process.env.NEXT_PUBLIC_BASE_URL}/images/anh-seo-page-website.jpg`]
      }
    }
  }
}
 * 
 * 
 */

export default function BlogDetailPage() {
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
      <h1 className='text-2xl font-extrabold tracking-tight  lg:text-3xl '>
        Kỹ năng SEO cần biết cho mọi Web Developer
      </h1>
      <article className='overflow-hidden mt-7'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fuga ullam? Vitae voluptas, consectetur totam
        maxime quae obcaecati tenetur? Corrupti tempora aliquam molestias ex dolore dolorem inventore animi totam
        veniam.
      </article>
    </div>
  )
}
