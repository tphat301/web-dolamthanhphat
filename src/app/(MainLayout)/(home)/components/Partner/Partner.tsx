import Image from 'next/image'
import Link from 'next/link'

const brands = [
  {
    id: 1,
    img: 'logo1.png'
  },
  {
    id: 2,
    img: 'logo2.png'
  },
  {
    id: 3,
    img: 'logo3.png'
  },
  {
    id: 4,
    img: 'logo4.png'
  },
  {
    id: 5,
    img: 'logo5.png'
  },
  {
    id: 6,
    img: 'logo6.png'
  },
  {
    id: 7,
    img: 'logo7.png'
  },
  {
    id: 8,
    img: 'logo8.png'
  },
  {
    id: 9,
    img: 'logo9.png'
  }
]

const Partner = () => {
  return (
    <div className='wrap-content md:py-10 mn:py-3'>
      <div className='grid grid-cols-12 md:gap-20 mn:overflow-hidden lg:overflow-x-auto'>
        <div className='mn:col-span-12 md:col-span-5 md:mb-0 mn:mb-4'>
          <div className='flex flex-wrap mn:w-[calc(100+10px)] mn:mx-[-5px] md:w-[calc(100+20px)] md:mx-[-10px]'>
            {brands.map((brand) => (
              <div
                key={brand.id}
                className='mn:w-[calc(100%/2_-_10px)] mn:my-[5px] mn:mx-[5px] md:w-[calc(100%/3_-_20px)] md:mx-[10px] border border-[#eeeeee] flex items-center justify-center md:my-[10px] h-[100px] hover:cursor-pointer single-brand-item'
              >
                <Image
                  src={`/images/${brand.img}`}
                  className='m-auto max-h-full'
                  width={80}
                  height={40}
                  quality={100}
                  alt='Image'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='mn:col-span-12 md:col-span-7 flex flex-col items-center justify-center'>
          <div className='relative mn:after:hidden md:after:block after:content-[""] after:w-[175px] after:h-[175px] after:bg-[url("/images/client-info-bg.png")] after:absolute after:left-[-35px] after:top-[-40px]'>
            <div className='flex md:gap-10 mn:gap-4 items-center md:mb-16'>
              <span className='text-[#854fee] dark:text-white md:font-extrabold mn:font-bold mn:text-6xl md:text-8xl '>
                03
              </span>
              <span className='mn:text-xl md:text-2xl font-semibold'>Kinh nghiệm làm việc</span>
            </div>
            <div className='flex items-center mn:gap-2 md:gap-4'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='mn:size-10 lg:size-14'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z'
                  />
                </svg>
              </div>
              <div>
                <p className='mn:text-base md:text-xl text-[#854fee] dark:text-white uppercase'>
                  Gọi ngay cho tôi nếu bạn có nhu cầu làm website
                </p>
                <Link
                  href='tel:0339355715'
                  className='mn:text-xl md:text-2xl font-semibold hover:text-[#854fee]'
                  title='Phone'
                >
                  0339.355.715
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
