import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import PATH from '@/constants/paths'
import { SEO_PAGE } from '@/constants/seoPage'
import { Blog, Blogs } from '@/types/blog.types'
import { SuccessResponseApi } from '@/types/utils.types'
import { generateNameId, getIdFromNameId } from '@/utils/commons'
import Image from 'next/image'
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
    const generateSlug = generateNameId({ name: data.title, id: data._id })
    const imageUrl = `${process.env.NEXT_PUBLIC_API}/image/${data.image}`
    return {
      title: data.seo_title,
      keywords: data.seo_keywords,
      description: data.seo_description,
      openGraph: {
        title: data.seo_title,
        description: data.seo_description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${PATH.BLOGS}/${generateSlug}`,
        images: [
          {
            url: imageUrl,
            width: SEO_PAGE.WIDTH_IMAGE,
            height: SEO_PAGE.HEIGHT_IMAGE,
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
        images: [
          {
            url: imageUrl,
            width: SEO_PAGE.WIDTH_IMAGE,
            height: SEO_PAGE.HEIGHT_IMAGE,
            alt: data.seo_title
          }
        ]
      }
    }
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const blog = await getBlogDetail(slug)

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
  if (!blog) return
  const blogsRelated = blogs?.filter((item) => item._id !== blog._id)
  return (
    <div className='wrap-content mn:py-8 lg:py-14'>
      <div className='grid grid-cols-12 gap-x-0 lg:gap-x-8'>
        <div className='mn:col-span-12 lg:col-span-8'>
          <div className='flex py-4 items-center'>
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
          <h1 className='text-2xl font-extrabold tracking-tight lg:text-3xl '>{blog.title}</h1>
          <article
            className='lg:overflow-x-auto mn:overflow-x-hidden mt-7 leading-10'
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        <div className='mn:col-span-12 lg:col-span-4'>
          <div className='rounded-sm lg:sticky lg:top-24'>
            <Accordion type='single' defaultValue='item' collapsible>
              <AccordionItem value='item'>
                <AccordionTrigger className='py-2.5 text-base font-semibold hover:no-underline hover:cursor-pointer'>
                  Có thể bạn sẽ thích
                </AccordionTrigger>
                <AccordionContent className='border-t border-[#eae4e8] pb-0 overflow-y-auto max-h-[705px]'>
                  {blogsRelated?.map((item) => (
                    <div key={item._id} className='pt-4'>
                      <Link
                        href={`${PATH.BLOGS}/${generateNameId({ name: item.title, id: item._id })}`}
                        key={item._id}
                        className='group flex'
                      >
                        <div className='h-12 w-20 flex-shrink-0 overflow-hidden rounded'>
                          <Image
                            width={100}
                            height={60}
                            quality={100}
                            src={`${process.env.NEXT_PUBLIC_API}/image/${item.image}`}
                            alt={item.title}
                            className='h-full w-full object-cover transition duration-100 ease-in-out group-hover:scale-110'
                          />
                        </div>
                        <h3 className='ml-3 h-10 flex-grow line-clamp-2 hover:text-[#4458dc]'>{item.title}</h3>
                      </Link>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
