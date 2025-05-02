import PATH from '@/app/constants/paths'
import ModeToggle from '@/components/mode-toggle'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='sticky inset-0 z-40 w-full mn:py-3 md:py-4 shadow-[0px_3px_16px_0px_rgba(0,0,0,0.1)] bg-background/90 backdrop-blur-lg dark:bg-black'>
      <div className='wrap-content flex items-center'>
        <div className='mn:hidden md:block font-bold uppercase text-2xl text-multi-gradient dark:text-white mr-10 relative hover:bg-primary/90 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]'>
          Học website kiếm tiền
        </div>
        <div className='flex gap-x-4 items-center'>
          <Link
            href={PATH.HOME}
            className='text-base hover:text-[#4458dc] transition-all uppercase font-bold'
            title='Trang chủ'
          >
            Trang chủ
          </Link>
          <Link
            href={PATH.BLOGS}
            className='text-base hover:text-[#4458dc] transition-all uppercase font-bold'
            title='Blogs'
          >
            Blogs
          </Link>
        </div>
        <div className='flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end'>
          <Link href='https://www.facebook.com/th.phat98' target='_blank' title='Facebook'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 36 36'
              fill='url(#a)'
              height={40}
              width={40}
              className='h-6 w-6 '
            >
              <defs>
                <linearGradient x1='50%' x2='50%' y1='97.078%' y2='0%' id='a'>
                  <stop offset='0%' stopColor='#0062E0' fill='none' />
                  <stop offset='100%' stopColor='#19AFFF' fill='none' />
                </linearGradient>
              </defs>
              <path d='M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z' />
              <path
                fill='#FFF'
                d='m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z'
              />
            </svg>
          </Link>
          <Link href='https://github.com/tphat301' title='Github' target='_blank'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='40'
              height='40'
              className='w-6 h-6 rounded-full bg-white'
              viewBox='0 0 50 50'
            >
              <path d='M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z'></path>
            </svg>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
