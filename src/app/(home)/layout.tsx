import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";



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

export const metadata: Metadata = {
  title: "Home Page",
  description: "created by Rizwan Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex flex-col w-full h-screen">
          <Topbar/>
          <Navbar/>


          {children}

          <Footer/>
        </main>
      </body>
    </html>
  );
}
