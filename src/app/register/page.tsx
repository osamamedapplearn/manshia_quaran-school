import type { Metadata } from 'next'
import RegistrationForm from '@/components/RegistrationForm'

export const metadata: Metadata = {
    title: 'التسجيل - مدرسة القرآن بمنشأة سلطان | Registration - Quran School',
    description: 'سجل الآن في مدرسة القرآن بمنشأة سلطان وابدأ رحلتك في حفظ القرآن الكريم | Register now at Manshia Sultan Quran School',
    keywords: 'تسجيل, القرآن الكريم, مدرسة قرآنية, حفظ القرآن, Registration, Quran School',
}

export default function RegisterPage() {
    return (
        <main id="main-content" className="v3-theme relative min-h-screen overflow-hidden bg-[#F8FAF5] pt-20">
            <div className="pointer-events-none absolute inset-0 luxury-mesh" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_45%)]" />
            <RegistrationForm variant="v3" />
        </main>
    )
}
