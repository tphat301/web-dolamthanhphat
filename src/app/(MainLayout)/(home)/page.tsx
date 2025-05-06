import type { Metadata } from 'next'
import Banner from '@/app/(MainLayout)/(home)/components/Banner'
import About from '@/app/(MainLayout)/(home)/components/About'
import Partner from '@/app/(MainLayout)/(home)/components/Partner'
import Services from '@/app/(MainLayout)/(home)/components/Services'
import { SEO_PAGE } from '@/constants/seoPage'
import Courses from '@/app/(MainLayout)/(home)/components/Courses'

export const metadata: Metadata = {
  title: SEO_PAGE.TITLE_HOME,
  keywords: SEO_PAGE.KEYWORDS_HOME,
  description: SEO_PAGE.DESCRIPTION_HOME,
  openGraph: {
    title: SEO_PAGE.TITLE_HOME,
    description: SEO_PAGE.DESCRIPTION_HOME,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/seo.jpg`,
        width: SEO_PAGE.WIDTH_IMAGE,
        height: SEO_PAGE.HEIGHT_IMAGE,
        alt: SEO_PAGE.TITLE_HOME
      }
    ],
    locale: 'vi_VN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_PAGE.TITLE_HOME,
    description: SEO_PAGE.DESCRIPTION_HOME,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/seo.jpg`,
        width: SEO_PAGE.WIDTH_IMAGE,
        height: SEO_PAGE.HEIGHT_IMAGE,
        alt: SEO_PAGE.TITLE_HOME
      }
    ]
  }
}

export default function HomePage() {
  return (
    <div>
      <Banner />
      <About />
      <Partner />
      <Services />
      <Courses />
    </div>
  )
}
