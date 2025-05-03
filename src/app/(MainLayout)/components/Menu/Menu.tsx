'use client'
import PATH from '@/constants/paths'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
  const pathname = usePathname()
  return (
    <div className='flex gap-x-4 items-center'>
      <Link
        href={PATH.HOME}
        className={clsx('text-base hover:text-[#4458dc] transition-all uppercase font-bold', {
          'text-[#4458dc]': pathname === PATH.HOME
        })}
        title='Trang chủ'
      >
        Trang chủ
      </Link>
      <Link
        href={PATH.BLOGS}
        className={clsx('text-base hover:text-[#4458dc] transition-all uppercase font-bold', {
          'text-[#4458dc]': pathname === PATH.BLOGS
        })}
        title='Blogs'
      >
        Blogs
      </Link>
    </div>
  )
}
