import './globals.css'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from '@/ui/organisms/NavBar'
// import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <NavBar />
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
