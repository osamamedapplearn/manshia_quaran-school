import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SocialProofSection from '@/components/SocialProofSection'
import GallerySection from '@/components/GallerySection'
import RegistrationForm from '@/components/RegistrationForm'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main id="main-content" className="min-h-screen">
            <HeroSection variant="v1" />
            <AboutSection variant="v1" />
            <SocialProofSection variant="v1" />
            <GallerySection variant="v1" />
            <RegistrationForm variant="v1" />
            <Footer variant="v1" />
        </main>
    )
}
