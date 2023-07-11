import '@/styles/global.css'

import { ThemeProvider } from './ThemeProvider'

import { Header, Footer } from '@/components'

export const metadata = {
  title: 'The Marketing Agency | The Social Agency For Growth-Focused Brands',
  description:
    'The Marketing Agency is an award-winning Social Media Marketing Agency that helps ambitious brands grow faster with Paid Social, Video Production &amp; Content.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
