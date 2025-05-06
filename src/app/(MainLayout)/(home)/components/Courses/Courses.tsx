import { BackgroundBeams } from '@/components/ui/background-beams'
import Link from 'next/link'

export default function Courses() {
  return (
    <div className='h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased'>
      <div className='max-w-2xl mx-auto p-4'>
        <h1 className='relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-10'>
          Các Khóa Học Mà Tôi Từng Học
        </h1>
        <p className='text-neutral-500 mx-auto my-2  text-center relative z-10 mb-14'>
          Đây là các khóa học chất lượng về lập trình website mà tôi được học trước đây để cải thiện trình độ lập trình
          của bản thân. Tại đây bạn có thể học được các video chất lượng từ người anh đi trước cũng như là người mentor
          cũ của tôi.
        </p>
        <Link
          href='https://duthanhduoc.com/courses/nextjs-super'
          title='Courses'
          target='_blank'
          className='group flex animate-rainbow items-center rounded-sm border-0 bg-[length:200%] mn:py-1 md:py-2 text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#191919,#191919),linear-gradient(#191919_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] text-sm hover:bg-primary/90 relative z-[2] mn:px-2 md:px-10 mn:h-10 md:h-12 mn:w-[100px] md:w-[280px] lg:text-base justify-center mx-auto hover:cursor-pointer'
        >
          Tìm hiểu ngay
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  )
}
