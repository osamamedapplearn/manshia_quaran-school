import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Quran School - Learn the Holy Quran',
    description: 'Join our prestigious Quran School and embark on a spiritual journey of learning and memorization.',
    keywords: 'Quran, Islamic School, Hifz, Quran Memorization, Islamic Education',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ar" dir="rtl">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
