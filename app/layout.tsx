import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Patient data management',
    description: 'Manage your patients data',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <Providers>
            <html lang="en">
                <body className={`${inter.className} bg-slate-600`}>
                    {children}
                </body>
            </html>
        </Providers>
    )
}
