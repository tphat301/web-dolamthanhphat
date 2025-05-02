import Image from 'next/image'

const Services = () => {
  return (
    <div className='wrap-content md:py-14 mn:py-3'>
      <h2 className='uppercase font-bold lg:mb-4 mn:mb-2 md:text-4xl text-center mn:text-3xl'>service offers</h2>
      <p className='text-[#777] dark:text-white mn:text-[14px] lg:text-base mn:leading-6 lg:leading-7 text-center md:max-w-[498px] mn:max-w-full mx-auto'>
        Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast beginning signs
        open god you are gathering ithe
      </p>
      <div className='grid grid-cols-12 md:gap-6 mn:gap-2 mn:mt-4 lg:mt-6'>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className='mn:col-span-6 lg:col-span-3 bg-[#f9f9fd] flex flex-col justify-center items-center md:p-6 mn:p-4 single-service-item hover:bg-white dark:bg-transparent dark:hover:bg-transparent'
            >
              <div className='md:mb-8 mn:mb-3'>
                <Image src={`/images/s${index + 1}.png`} width={68} height={68} quality={100} alt='Image' />
              </div>
              <h4 className='uppercase font-bold mn:text-base lg:text-2xl md:mb-3 mn:mb-1'>Wp developing</h4>
              <p className='text-[#777] lg:text-base mn:text-[14px] dark:text-white mn:leading-6 lg:leading-7 line-clamp-3 text-center'>
                Creeping for female light years that lesser can not evening heaven is not bearing tree
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Services
