import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { AOSProvider } from "@/providers/aos-provider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Rainbowbooth",
  description: "Dịch vụ photo booth độc đáo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSProvider>
          <Header />
          <div className="w-full min-h-screen">{children}</div>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  )
}
