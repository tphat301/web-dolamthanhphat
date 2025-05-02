export default function generateMetadata({
  title,
  description,
  image = `${process.env.NEXT_PUBLIC_BASE_URL}/images/anh-seo-page-website.jpg`,
  locale = 'vi_VN',
  type = 'website',
  card = 'summary_large_image',
  width = 200,
  height = 200,
  url = process.env.NEXT_PUBLIC_BASE_URL
}: {
  title: string
  description: string
  image?: string
  locale?: string
  type?: string
  card?: string
  width?: number
  height?: number
  url?: string
}) {
  return {
    title,
    keywords: title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image, // dùng full URL
          width,
          height,
          alt: title
        }
      ],
      locale,
      type
    },
    twitter: {
      card,
      title,
      description,
      images: [image]
    }
  }
}
