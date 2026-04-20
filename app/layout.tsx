import type React from "react"
import type { Metadata, Viewport } from "next"
import { Roboto, Quicksand, Urbanist } from "next/font/google"
import Script from "next/script"
import { organizationSchema, websiteSchema } from "@/app/schema"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-quicksand",
})

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-urbanist",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://valencia-school.edu.hn"),
  title: {
    default: "Valencia School — Escuela Bilingüe en Tegucigalpa, Honduras",
    template: "%s | Valencia School",
  },
  description:
    "Escuela bilingüe en Tegucigalpa con calendario nacional y anglosajón. Preescolar, primaria y secundaria en nuestras dos sedes: Residencial Valencia y Los Hidalgos.",
  keywords: [
    "Valencia School",
    "Instituto Valencia",
    "escuela bilingüe Honduras",
    "escuela bilingüe Tegucigalpa",
    "escuela Tegucigalpa",
    "educación bilingüe",
    "preescolar Tegucigalpa",
    "primaria Tegucigalpa",
    "secundaria Tegucigalpa",
    "preescolar primaria secundaria",
    "calendario anglosajón",
    "calendario nacional",
    "Residencial Valencia",
    "Los Hidalgos",
    "Comayagüela",
    "escuela Francisco Morazán",
  ],
  authors: [{ name: "Valencia School" }],
  creator: "Valencia School",
  publisher: "Valencia School",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    siteName: "Valencia School",
    title: "Valencia School — Escuela Bilingüe en Tegucigalpa, Honduras",
    description:
      "Escuela bilingüe en Tegucigalpa con calendario nacional y anglosajón. Preescolar, primaria y secundaria en Residencial Valencia y Los Hidalgos.",
    url: "https://valencia-school.edu.hn",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valencia School — Escuela Bilingüe en Tegucigalpa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valencia School — Escuela Bilingüe en Tegucigalpa, Honduras",
    description:
      "Escuela bilingüe en Tegucigalpa con calendario nacional y anglosajón. Preescolar, primaria y secundaria en Residencial Valencia y Los Hidalgos.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/icons/favicon.ico",
    shortcut: "/images/icons/favicon.ico",
    apple: "/images/icons/favicon.ico",
  },
  manifest: "/manifest.json",
  // verification: {
  //   google: "", // TODO: agregar token de Google Search Console
  // },
  category: "education",
}

export const viewport: Viewport = {
  themeColor: "#216B8D",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${quicksand.variable} ${urbanist.variable}`}
    >
      <body className="font-body antialiased">
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
        {children}
      </body>
    </html>
  )
}
