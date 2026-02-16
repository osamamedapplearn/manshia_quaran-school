import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
    title: 'مدرسة القرآن بمنشأة سلطان - Quran School',
    description: 'تعليم أفراد المجتمع كتاب الله تعالى وتدبره والتخلق به من خلال أجود التطبيقات',
    keywords: 'القرآن الكريم, مدرسة قرآنية, حفظ القرآن, تحفيظ, منشأة سلطان, Quran, Islamic School',
    icons: {
        icon: '/icon.png',
        apple: '/icon.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ar" dir="rtl">
            <body className="font-arabic">
                <Header />
                {children}
            </body>
        </html>
    )
}
