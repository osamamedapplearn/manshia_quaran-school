import type { Metadata } from 'next'
import RegistrationForm from '@/components/RegistrationForm'

export const metadata: Metadata = {
    title: 'التسجيل - مدرسة القرآن بمنشأة سلطان | Registration - Quran School',
    description: 'سجل الآن في مدرسة القرآن بمنشأة سلطان وابدأ رحلتك في حفظ القرآن الكريم | Register now at Manshia Sultan Quran School',
    keywords: 'تسجيل, القرآن الكريم, مدرسة قرآنية, حفظ القرآن, Registration, Quran School',
}

export default function RegisterPage() {
    return (
        <main className="min-h-screen pt-20">
            <RegistrationForm />
        </main>
    )
}
