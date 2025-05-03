import { About as TypeAboutResponse } from '@/types/about.types'
import { SuccessResponseApi } from '@/types/utils.types'
import Image from 'next/image'
import Link from 'next/link'

const About = async () => {
  let aboutRespone: TypeAboutResponse | null = null
  try {
    const responeAPI = await fetch(`${process.env.NEXT_PUBLIC_API}/about`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!responeAPI.ok) throw new Error('Call api about faild!')
    const aboutData: SuccessResponseApi<TypeAboutResponse> = await responeAPI.json()
    aboutRespone = aboutData.data
  } catch (error) {
    console.error(error)
  }
  return (
    <div className='wrap-content md:py-10 mn:py-3'>
      <div className='grid grid-cols-12 md:gap-x-3 mn:gap-x-0'>
        <div className='mn:col-span-12 md:col-span-7'>
          <Image
            src={aboutRespone ? `${process.env.NEXT_PUBLIC_API}/image/${aboutRespone.image}` : '/images/about-us.png'}
            className='block w-full h-full'
            width={687}
            height={631}
            quality={100}
            alt='About'
          />
        </div>
        <div className='mn:col-span-12 md:col-span-5 flex flex-col justify-center mn:items-center md:items-start md:gap-0 mn:gap-1'>
          <h2 className='mn:text-xl mn:text-center md:text-start md:text-4xl mn:mb-1 md:mb-5 font-bold uppercase'>
            {aboutRespone?.title}
          </h2>
          <div className='text-[#777] dark:text-white line-clamp-7 mn:leading-7 mn:text-justify md:text-start md:leading-8 font-light mn:mb-2 md:mb-4'>
            {aboutRespone?.description}
          </div>
          <Link
            href='https://github.com/tphat301'
            title='Github'
            target='_blank'
            className='group inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-sm border-0 bg-[length:200%] mn:py-1 md:py-2 text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#191919,#191919),linear-gradient(#191919_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] text-sm hover:bg-primary/90 relative z-[0] mn:px-2 md:px-10 mn:h-10 md:h-12 mn:w-[100px] md:w-[280px] md:text-xl mn:text-base'
          >
            GIT HUB
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
