import { AuroraText } from '@/components/magicui/aurora-text'
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
        <div className='wrap-content py-10'>
          <p className='text-center'>
            Copyright ©2025 Đỗ Lâm Thành Phát - Cảm ơn{' '}
            <Link href='https://nextjs.org/' target='_blank' className='font-bold' title='Next.js'>
              <AuroraText>Next.js</AuroraText>
            </Link>
            ,{' '}
            <Link href='https://ui.shadcn.com/' target='_blank' className='font-bold' title='ShadcnUI'>
              <AuroraText>ShadcnUI</AuroraText>
            </Link>
            ,{' '}
            <Link href='https://tailwindcss.com/' target='_blank' className='font-bold' title='Tailwindcss'>
              <AuroraText>Tailwindcss</AuroraText>
            </Link>{' '}
            đã giúp mình build website này.
          </p>
          <div className='flex items-center justify-center gap-2'>
            <picture>
              <svg height={32} viewBox='0 0 148 90' version='1.1' xmlnsXlink='http://www.w3.org/1999/xlink'>
                <title>NextJS</title>
                <path
                  d='M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z'
                  fill='currentColor'
                  fillRule='nonzero'
                />
              </svg>
            </picture>
            <picture>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#00bcff'
                height={32}
                viewBox='0 0 24 24'
                xmlSpace='preserve'
              >
                <title>TailwindCSS</title>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z'
                />
              </svg>
            </picture>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
