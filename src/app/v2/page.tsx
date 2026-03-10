import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SocialProofSection from '@/components/SocialProofSection'
import GallerySection from '@/components/GallerySection'
import RegistrationForm from '@/components/RegistrationForm'
import Footer from '@/components/Footer'

export default function HomeV2Page() {
    return (
        <main id="main-content" className="min-h-screen bg-[#f5f7fb] pt-2">
            <HeroSection variant="v2" />
            <AboutSection variant="v2" />
            <SocialProofSection variant="v2" />
            <GallerySection variant="v2" />
            <RegistrationForm variant="v2" />
            <Footer variant="v2" />
        </main>
    )
}
