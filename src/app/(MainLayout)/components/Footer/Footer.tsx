import PATH from '@/constants/paths'
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
const items = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/th.phat98',
    icon: Facebook
  },
  {
    title: 'Instagram',
    url: PATH.HOME,
    icon: Instagram
  },
  {
    title: 'Linkedin',
    url: PATH.HOME,
    icon: Linkedin
  },
  {
    title: 'Github',
    url: 'https://github.com/tphat301',
    icon: Github
  }
]

const Footer = () => {
  return (
    <footer>
      <div className='wrap-content mn:py-4 lg:py-10'>
        <h4 className='uppercase tracking-widest font-bold mn:text-base lg:text-2xl text-center mb-4'>Follow Me</h4>
        <div className='flex items-center justify-center gap-4 lg:mb-6 mn:mb-2'>
          {items.map((item, index) => (
            <Link href={item.url} target='_blank' key={index} title={item.title}>
              <item.icon />
            </Link>
          ))}
        </div>
      </div>
      <div className='border-t-gray-300 border-t'>
        <p className='py-10 text-center wrap-content'>
          Copyright ©2025 Đỗ Lâm Thành Phát - Cảm ơn Next.js, ShadcnUI, TailwindCSS đã giúp mình build website này.
        </p>
      </div>
    </footer>
  )
}

export default Footer
