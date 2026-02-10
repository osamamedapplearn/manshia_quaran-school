'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="section-container">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* About */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center md:justify-start mb-4">
                            <Image
                                src="/images/school-logo.jpg"
                                alt="مدرسة القرآن بمنشأة سلطان"
                                width={120}
                                height={120}
                                className="rounded-lg"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-islamic-gold font-arabic">
                            مدرسة القرآن بمنشأة سلطان
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed font-arabic">
                            مدرسة قرآنية تهتم بتعليم القرآن الكريم لجميع الفئات العمرية بقرية منشأة سلطان بما لا يؤثر على حياتهم اليومية.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A specialized institute for Quran memorization and teaching recitation and Tajweed rules using modern educational methods.
                        </p>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-islamic-gold">
                            Contact Us • تواصل معنا
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-400 hover:text-islamic-emerald transition-colors">
                                <Phone className="w-5 h-5" />
                                <span>+20 123 456 7890</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-islamic-emerald transition-colors">
                                <Mail className="w-5 h-5" />
                                <span>info@quranschool.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-islamic-emerald transition-colors">
                                <MapPin className="w-5 h-5" />
                                <span className="font-arabic">منشأة سلطان، مصر • Manshaa Sultan, Egypt</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-islamic-gold">
                            Follow Us • تابعنا
                        </h3>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: 'https://www.facebook.com/madrasatquran.ms', label: 'Facebook' },
                                { icon: Instagram, href: '#', label: 'Instagram' },
                                { icon: Twitter, href: '#', label: 'Twitter' },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-islamic-emerald transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p className="font-arabic mb-2">
                        © 2024 مدرسة القرآن الكريم. جميع الحقوق محفوظة.
                    </p>
                    <p className="text-sm">
                        © 2024 Quran School. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
