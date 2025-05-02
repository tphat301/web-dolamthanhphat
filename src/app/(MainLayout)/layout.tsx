import Footer from '@/app/(MainLayout)/components/Footer'
import Header from '@/app/(MainLayout)/components/Header'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='main-layout'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
