'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { href: '#about', label: 'من نحن', labelEn: 'About' },
        { href: '#registration', label: 'التسجيل', labelEn: 'Register' },
        { href: '#contact', label: 'تواصل معنا', labelEn: 'Contact' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <Image
                            src="/images/schoollogo.jpg"
                            alt="مدرسة القرآن بمنشأة سلطان"
                            width={140}
                            height={300}
                            className="object-contain"
                        />
                        <div className="hidden sm:block text-right">
                            <h1 className="text-lg font-bold text-islamic-green font-arabic leading-tight">
                                مدرسة القرآن
                            </h1>
                            <p className="text-xs text-islamic-gold font-arabic">
                                بمنشأة سلطان
                            </p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative text-islamic-green hover:text-islamic-gold font-semibold transition-colors duration-300 font-arabic"
                            >
                                <span className="text-base">{link.label}</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-islamic-gold group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-islamic-green hover:text-islamic-gold transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden py-4 border-t border-gray-200"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-3 text-right text-islamic-green hover:text-islamic-gold font-semibold transition-colors font-arabic"
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
