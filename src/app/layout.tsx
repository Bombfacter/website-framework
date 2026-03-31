import type { Metadata } from 'next'
import PageShell from '@/components/layout/PageShell'
import '@/styles/tokens.css'

export const metadata: Metadata = {
  title: 'Website Framework',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  )
}
