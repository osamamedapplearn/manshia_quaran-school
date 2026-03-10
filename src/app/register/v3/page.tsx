import RegistrationForm from '@/components/RegistrationForm'

export default function RegisterV3Page() {
    return (
        <main id="main-content" className="v3-theme relative min-h-screen pt-20 overflow-hidden bg-[#F8FAF5]">
            <div className="pointer-events-none absolute inset-0 luxury-mesh" />
            <RegistrationForm variant="v3" />
        </main>
    )
}
