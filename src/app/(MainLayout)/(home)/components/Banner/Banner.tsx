import Image from 'next/image'

const Banner = () => {
  return (
    <div className='wrap-content mn:py-8 md:py-50'>
      <div className='grid grid-cols-12'>
        <div className='mn:col-span-12 md:col-span-5 flex flex-col justify-center overflow-hidden mn:mb-6 md:mb-0'>
          <h3 className='mn:text-base md:text-4xl mn:mb-2 md:mb-8 uppercase font-bold relative after:content-[""] after:top-[50%] after:left-[23%] after:bg-[#000] after:w-[410px] after:h-[2px] after:absolute after:translate-y-[-50%] mn:after:hidden lg:after:block'>
            Hello
          </h3>
          <h1 className='uppercase mn:text-2xl md:text-5xl font-bold mn:mb-2 md:mb-8 lett tracking-wider'>
            I am Thành Phát
          </h1>
          <h5 className='uppercase font-bold mn:text-base md:text-2xl mn:mb-2 md:mb-8'>Fullstack Developer</h5>
          <div className='flex flex-wrap mn:justify-between md:justify-start items-center relative z-20'>
            <div className='flex items-center space-x-2 mr-4'>
              <span>
                <svg
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='md:h-10 md:w-10 h-4 w-4 text-[#333333] dark:text-white flex-shrink-0 stroke-1'
                >
                  <title>Next.js</title>
                  <path d='M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z' />
                </svg>
              </span>
              <span className='text-sm font-semibold text-neutral-500 dark:text-white flex-shrink-0'>Next.js</span>
            </div>
            <div className='flex items-center space-x-2 mr-4'>
              <span className='rotate-ani'>
                <svg
                  role='img'
                  viewBox='0 0 32 32'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='md:h-10 md:w-10 h-4 w-4 text-[#087ea4] flex-shrink-0 stroke-1'
                >
                  <title>React.js</title>
                  <path d='m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z' />
                </svg>
              </span>
              <span className='text-sm font-semibold text-neutral-500 dark:text-white flex-shrink-0'>React</span>
            </div>
            <div className='flex items-center space-x-2 mr-4'>
              <span>
                <svg
                  width='800px'
                  height='800px'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='md:h-10 md:w-10 h-4 w-4 text-[#417e38] flex-shrink-0 stroke-1'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14 4.21281L7.5 0.421143L1 4.21281V10.7872L2.00634 11.3742L4.06264 10.5422C4.62921 10.313 5.00004 9.7629 5.00004 9.15171V4H6.00004V9.15171C6.00004 10.1704 5.382 11.0871 4.43772 11.4692L3.09826 12.0112L7.5 14.5788L14 10.7872V4.21281ZM7 6C7 4.89543 7.89543 4 9 4H10.1667C11.1792 4 12 4.82081 12 5.83333V6H11V5.83333C11 5.3731 10.6269 5 10.1667 5H9C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7H10C11.1046 7 12 7.89543 12 9C12 10.1046 11.1046 11 10 11H9C7.89543 11 7 10.1046 7 9H8C8 9.55228 8.44772 10 9 10H10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 10 8H9C7.89543 8 7 7.10457 7 6Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              <span className='text-sm font-semibold text-neutral-500 dark:text-white flex-shrink-0'>Node.js</span>
            </div>
            <div className='flex items-center space-x-2 mr-4'>
              <span>
                <svg
                  width='800px'
                  height='800px'
                  viewBox='0 0 64 64'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  xmlSpace='preserve'
                  fill='none'
                  stroke='currentColor'
                  className='md:h-10 md:w-10 h-4 w-4 text-[#42b883] flex-shrink-0 stroke-1'
                  style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
                >
                  <rect id='Icons' x={-512} y={-128} width={1280} height={800} style={{ fill: 'none' }} />
                  <g id='Icons1'>
                    <g id='Strike' />
                    <g id='H1' />
                    <g id='H2' />
                    <g id='H3' />
                    <g id='list-ul' />
                    <g id='hamburger-1' />
                    <g id='hamburger-2' />
                    <g id='list-ol' />
                    <g id='list-task' />
                    <g id='trash' />
                    <g id='vertical-menu' />
                    <g id='horizontal-menu' />
                    <g id='sidebar-2' />
                    <g id='Pen' />
                    <g id='Pen1' />
                    <g id='clock' />
                    <g id='external-link' />
                    <g id='hr' />
                    <g id='info' />
                    <g id='warning' />
                    <g id='plus-circle' />
                    <g id='minus-circle' />
                    <g id='vue'>
                      <path
                        d='M17.595,11.204l8.91,0l5.536,9.391l5.591,-9.391l8.831,0l-14.422,25.359l-14.446,-25.359Z'
                        fill='none'
                      />
                      <path
                        d='M8.089,11.204l23.952,41.845l24.126,-41.845l-9.704,0l-14.422,25.359l-14.446,-25.359l-9.506,0Z'
                        fill='none'
                      />
                    </g>
                    <g id='cog' />
                    <g id='logo' />
                    <g id='radio-check' />
                    <g id='eye-slash' />
                    <g id='eye' />
                    <g id='toggle-off' />
                    <g id='shredder' />
                    <g id='spinner--loading--dots-' />
                    <g id='react' />
                    <g id='check-selected' />
                    <g id='turn-off' />
                    <g id='code-block' />
                    <g id='user' />
                    <g id='coffee-bean' />
                    <g id='coffee-beans'>
                      <g id='coffee-bean1' />
                    </g>
                    <g id='coffee-bean-filled' />
                    <g id='coffee-beans-filled'>
                      <g id='coffee-bean2' />
                    </g>
                    <g id='clipboard' />
                    <g id='clipboard-paste' />
                    <g id='clipboard-copy' />
                    <g id='Layer1' />
                  </g>
                </svg>
              </span>
              <span className='text-sm font-semibold text-neutral-500 dark:text-white flex-shrink-0'>Vue</span>
            </div>
          </div>
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
