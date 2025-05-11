import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { ShineBorder } from '@/components/magicui/shine-border'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight-new'

export default function TechnicalMain() {
  return (
    <div className='lg:py-15 mn:py-12 relative overflow-hidden dark:bg-black/[0.96]'>
      <Spotlight />
      <div className='wrap-content'>
        <div className='logo-footer flex justify-center items-center mx-auto mn:mb-8 lg:mb-10'>
          <ShineBorder
            borderWidth={5}
            shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
            className='rounded-[10px] overflow-hidden'
          />
          <div className='logo-background'>
            <div className='logo-footer-border'></div>
            <div className='logo-footer-edge'></div>
          </div>
          <div className='logo-footer-filter'></div>
          <div className='logo-footer-shine-effect'></div>
          <Image
            src='/images/logo-main.png'
            width={46}
            height={64}
            quality={100}
            className='logo-footer-img'
            alt='Logo'
          />
        </div>
        <h1 className='font-bold text-center mn:mb-4 lg:mb-10 relative z-10 text-2xl lg:text-7xl  bg-clip-text dark:text-transparent bg-gradient-to-b text-neutral-500 dark:from-neutral-200 dark:to-neutral-600 font-sans'>
          Công cụ xây dựng cho Web
        </h1>
        <h3 className='lg:text-3xl text-center mn:mb-4 lg:mb-8 text-neutral-500'>
          NextJS Framework là công cụ xây dựng giao diện cực nhanh hỗ trợ cho thế hệ ứng dụng web tiếp theo.
        </h3>
        <Link href='https://nextjs.org/' target='_blank' title='NextJS Framework'>
          <div className='group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] w-fit cursor-pointer'>
            <span
              className={cn(
                'absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]'
              )}
              style={{
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'subtract',
                WebkitClipPath: 'padding-box'
              }}
            />
            🎉
            <AnimatedGradientText className='text-sm font-medium'>NextJS Framework</AnimatedGradientText>
            <ChevronRight className='ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
          </div>
        </Link>
      </div>
    </div>
  )
}
