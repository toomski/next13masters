import './globals.css'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ActiveLink } from '@/ui/atoms/ActiveLink'
// import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Products',
}

const linkClassName = 'flex h-full w-full min-w-[3rem] items-center justify-center px-1 pt-1 text-center text-sm font-medium'
const activeLinkClassName = 'flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 px-1 pt-1 text-center text-sm font-medium text-blue-500 border-blue-500'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <header className='sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg'>
          <nav className='scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto'>
            <div className='hidden flex-shrink-0 items-center lg:flex'></div>
            <ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
              <li className="first:pl-4 last:pr-4 lg:px-0">
                <ActiveLink href='/' exact className={linkClassName} activeClassName={activeLinkClassName}>
                  Home
                </ActiveLink>
              </li>
              <li className="first:pl-4 last:pr-4 lg:px-0">
                <ActiveLink href='/products' className={linkClassName} activeClassName={activeLinkClassName}>
                  All
                </ActiveLink>
              </li>
            </ul>
          </nav>
        </header>
        <section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
          {children}
        </section>
        <footer className="border-t bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <nav className="text-center" aria-label="Footer">
              <a className="text-sm leading-6 text-cyan-700 hover:text-blue-900" href="/terms">Terms</a>
            </nav>
            <p className="mt-2 text-center text-xs leading-7 text-slate-500">© 2023 Demo{' '}<a className="underline" href="https://next13masters.pl">next13masters.pl</a>
            </p>
          </div>
        </footer>
      </body>
      {/* <Analytics /> */}
    </html>
  )
}
