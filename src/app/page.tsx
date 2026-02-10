import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SocialProofSection from '@/components/SocialProofSection'
import GallerySection from '@/components/GallerySection'
import RegistrationForm from '@/components/RegistrationForm'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <AboutSection />
            <SocialProofSection />
            <GallerySection />
            <RegistrationForm />
            <Footer />
        </main>
    )
}
