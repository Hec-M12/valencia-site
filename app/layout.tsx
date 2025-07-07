import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Instituto Valencia - Educación Bilingüe de Calidad",
  description: "Institución educativa bilingüe en Honduras con formación en valores cristianos",
  icons: {
    icon: "/images/icons/favicon.ico",
    shortcut: "/images/icons/favicon.ico",
    apple: "/images/icons/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/icons/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/images/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icons/favicon.ico" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
