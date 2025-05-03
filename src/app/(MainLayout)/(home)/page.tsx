import type { Metadata } from 'next'
import Banner from '@/app/(MainLayout)/(home)/components/Banner'
import About from '@/app/(MainLayout)/(home)/components/About'
import Partner from '@/app/(MainLayout)/(home)/components/Partner'
import Services from '@/app/(MainLayout)/(home)/components/Services'

export const metadata: Metadata = {
  title: 'Thành Phát - Fullstack Developer',
  keywords: 'Chào mừng bạn đến với website của mình',
  description: 'Chào mừng bạn đến với website của mình',
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_URL}/images/favicon.png`
  },
  openGraph: {
    title: 'Thành Phát - Fullstack Developer',
    description: 'Chào mừng bạn đến với website của mình',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/seo.jpg`,
        width: 200,
        height: 200,
        alt: 'Thành Phát - Fullstack Developer'
      }
    ],
    locale: 'vi_VN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thành Phát - Fullstack Developer',
    description: 'Chào mừng bạn đến với website của mình',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/seo.jpg`,
        width: 200,
        height: 200,
        alt: 'Thành Phát - Fullstack Developer'
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
    </div>
  )
}
