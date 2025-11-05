import './globals.css'
import React from 'react'
import { Metadata } from 'next'
import { ThemeProvider } from './theme-provider'
import ThemeToggle from '@/components/ThemeToggle'


export const metadata: Metadata = {
  title: 'Claudin Saintil — Portfolio',
  description: 'Portfolio de Claudin Saintil — Analyste développeur',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-end">
            <ThemeToggle />
          </div>
          <div className="max-w-5xl mx-auto px-6">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
