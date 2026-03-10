'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { getVariantFromPath } from './uiVariant'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const variant = getVariantFromPath(pathname)

    const navLinks = [
        { href: '#about', label: 'من نحن', labelEn: 'About' },
        { href: '#registration', label: 'التسجيل', labelEn: 'Register' },
        { href: 'https://wa.me/201158118765', label: 'تواصل معنا', labelEn: 'Contact', external: true },
    ]

    const headerClassName =
        variant === 'v1'
            ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-soft'
            : variant === 'v2'
                ? 'fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-lg border-b border-slate-300/70 shadow-[0_12px_32px_rgba(15,23,42,0.08)]'
                : 'fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_12px_36px_rgba(2,6,23,0.22)]'

    const navLinkClassName =
        variant === 'v1'
            ? 'group relative text-islamic-emerald hover:text-islamic-gold font-semibold transition-colors duration-300 font-arabic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-islamic-emerald/50 rounded-sm'
            : variant === 'v2'
                ? 'group relative text-slate-900 hover:text-islamic-emerald font-bold transition-all duration-300 font-arabic px-4 py-2 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-islamic-gold/50'
                : 'group relative text-white/90 hover:text-[#064e3b] font-semibold transition-all duration-300 font-arabic px-4 py-2 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-islamic-gold/60'

    return (
        <header className={headerClassName}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <Image
                            src="/images/logo1.png"
                            alt="مدرسة القرآن بمنشأة سلطان"
                            width={140}
                            height={300}
                            className="object-contain"
                        />
                        <div className="hidden sm:block text-right md:text-center md:text-center">
                            <h1 className={`text-lg font-bold font-arabic leading-tight ${variant === 'v3' ? 'text-[#064e3b]' : 'text-islamic-green'}`}>
                                مدرسة القرآن
                            </h1>
                            <p className={`text-xs font-arabic ${variant === 'v3' ? 'text-[#EAB308]' : 'text-islamic-gold'}`}>
                                بمنشأة سلطان
                            </p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-3" aria-label="التنقل الرئيسي">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={navLinkClassName}
                            >
                                <span className="text-base">{link.label}</span>
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${variant === 'v2' ? 'bg-islamic-emerald' : 'bg-islamic-gold'}`} />
                            </motion.a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden p-2 transition-colors rounded-md ${variant === 'v3' ? 'text-[#EAB308] hover:text-[#064e3b] focus-visible:ring-[#EAB308]/60' : 'text-islamic-green hover:text-islamic-gold focus-visible:ring-islamic-emerald/50'} focus-visible:outline-none focus-visible:ring-2`}
                        aria-label="فتح أو إغلاق القائمة"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden py-4 border-t ${variant === 'v3' ? 'border-white/20' : 'border-gray-200'}`}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-3 text-right md:text-center md:text-center font-semibold transition-colors font-arabic rounded-sm focus-visible:outline-none focus-visible:ring-2 ${variant === 'v3' ? 'text-[#064e3b] hover:text-[#EAB308] focus-visible:ring-[#EAB308]/60' : 'text-islamic-green hover:text-islamic-gold focus-visible:ring-islamic-emerald/50'}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </header>
    )
}
