import SvgSkill from '@/app/(MainLayout)/(home)/components/SvgSkill'
import { SparklesText } from '@/components/magicui/sparkles-text'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='wrap-content mn:py-8 md:py-50'>
      <div className='grid grid-cols-12'>
        <div className='mn:col-span-12 md:col-span-5 flex flex-col justify-center overflow-hidden mn:mb-6 md:mb-0'>
          <h3 className='mn:text-base md:text-3xl mn:mb-2 md:mb-6 uppercase font-bold relative'>Welcome</h3>
          <h1 className='uppercase font-bold mn:mb-2 md:mb-8 lett tracking-wider'>
            <SparklesText className='mn:text-2xl lg:text-5xl'>I am Thành Phát</SparklesText>
          </h1>
          <h5 className='uppercase font-bold mn:text-base md:text-2xl mn:mb-2 md:mb-8'>Fullstack Developer</h5>
          <SvgSkill />
        </div>
        <div className='mn:col-span-12 md:col-span-7'>
          <div>
            <Image
              src='/images/home-right.png'
              className='block w-full h-full'
              width={724}
              height={703}
              quality={100}
              alt='Banner'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
