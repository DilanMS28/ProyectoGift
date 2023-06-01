"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import type { AppProps } from "next/app"; 
import { Provider } from "react-redux";
import ApplicationStore from "@/root/redux/store";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {  children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>         
        <Provider store={ApplicationStore}>
          {children}
        </Provider>        
      </body>
    </html>
  )
}
