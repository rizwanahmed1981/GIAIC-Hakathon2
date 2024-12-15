
import "../globals.css";

import localFont from "next/font/local";
import Footer from "../components/footer"
import Topbar2 from "../components/tobbar2";
import Navbar from '@/app/components/navbar'

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Product page',
  description: 'created by Rizwan Ahmed',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex flex-col w-full h-screen">
          <Topbar2/>
          <Navbar/>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
