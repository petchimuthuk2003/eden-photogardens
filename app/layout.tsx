import './globals.css'

export const metadata = {
  title: 'Eden Photo Garden',
  description: 'Professional photography services',
  icons: {
    icon: '/eden-favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/eden-favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}