import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SocialProofSection from '@/components/SocialProofSection'
import GallerySection from '@/components/GallerySection'
import RegistrationForm from '@/components/RegistrationForm'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main id="main-content" className="v3-theme relative min-h-screen overflow-hidden bg-[#F8FAF5]">
            <div className="pointer-events-none absolute inset-0 luxury-mesh" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_45%)]" />
            <HeroSection variant="v3" />
            <AboutSection variant="v3" />
            <SocialProofSection variant="v3" />
            <GallerySection variant="v3" />
            <RegistrationForm variant="v3" />
            <Footer variant="v3" />
        </main>
    )
}
