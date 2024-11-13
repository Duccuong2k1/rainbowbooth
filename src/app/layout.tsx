import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { AOSProvider } from "@/providers/aos-provider"
import Social from "@/components/Social"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// })
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// })

export const metadata: Metadata = {
  title: "Rainbowbooth - Dịch vụ photo booth độc đáo",
  description:
    "Rainbowbooth cung cấp dịch vụ photo booth độc đáo và phong cách để làm cho sự kiện của bạn trở nên khó quên",
  keywords: [
    "Rainbowbooth",
    "photo booth service",
    "unique photo booth",
    "event photography",
    "wedding photo booth",
    "corporate event photography",
  ],
  applicationName: "Rainbowbooth",
  openGraph: {
    title: "Rainbowbooth - Dịch vụ photo booth độc đáo",
    description:
      "Rainbowbooth cung cấp dịch vụ photo booth độc đáo và phong cách để làm cho sự kiện của bạn trở nên khó quên",
    url: "https://rainbowbooth.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/QjY9Qjy.png",
        width: 1200,
        height: 630,
        alt: "Rainbowbooth - Dịch vụ photo booth độc đáo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainbowbooth - Dịch vụ photo booth độc đáo",
    description:
      "Rainbowbooth cung cấp dịch vụ photo booth độc đáo và phong cách để làm cho sự kiện của bạn trở nên khó quên",
    images: ["https://i.imgur.com/QjY9Qjy.png"],
  },
  viewport: "width=device-width, initial-scale=1",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AOSProvider>
          <Header />
          <div className="w-full min-h-screen">{children}</div>
          <Social />
          <Footer />
        </AOSProvider>
      </body>
    </html>
  )
}
