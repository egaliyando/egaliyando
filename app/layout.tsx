import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Caveat_Brush, Nunito_Sans } from 'next/font/google'

const caveatBrush = Caveat_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-caveat-brush',
})

const nunitoSans = Nunito_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'Ega Liyando — Software Engineer',
  description: 'Full-Stack & AI Developer',
  icons: {
    icon: '/E.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${caveatBrush.variable} ${nunitoSans.variable}`}>
      <body className="antialiased font-nunito">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
