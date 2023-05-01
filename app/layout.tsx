"use client"
import  React from 'react'
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "next-themes"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"
import SplashScreen from '@/components/SplashScreen'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading , setIsLoading] = React.useState(isHome)

  React.useEffect(() =>{
    if(isLoading) return 
  },[isLoading])

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
        {
          isLoading && isHome ? 
          <SplashScreen finishLoading={() => setIsLoading(false)}/> : 
          <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
        }
       
      </body>
    </html>
  )
}