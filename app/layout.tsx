import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navigation/navbar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omar Yahia\'s AI Notes',
  description: 'A compilation of AI notes related to MLPs and Transformers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='w-full my-[100px] relative'>
          {children}
        </div>
        
      </body>
    </html>
  )
}
