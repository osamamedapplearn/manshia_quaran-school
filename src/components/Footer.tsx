'use client'

import { motion } from 'framer-motion'
import { Facebook } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="section-container">
                <div className="flex flex-col items-center justify-center gap-8 mb-12">
                    {/* Logo and Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/images/schoollogo.jpg"
                                alt="مدرسة القرآن بمنشأة سلطان"
                                width={240}
                                height={240}
                                className="rounded-lg"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-islamic-gold font-arabic">
                            مدرسة القرآن بمنشأة سلطان
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed font-arabic max-w-2xl">
                            مدرسة قرآنية تهتم بتعليم القرآن الكريم لجميع الفئات العمرية بقرية منشأة سلطان
                        </p>
                    </motion.div>

                    {/* Facebook Link Only */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold mb-4 text-islamic-gold font-arabic">
                            تابعنا على فيسبوك
                        </h3>
                        <motion.a
                            href="https://www.facebook.com/madrasatquran.ms"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-islamic-emerald rounded-full hover:bg-islamic-emerald-dark transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-6 h-6" />
                            <span className="font-arabic font-semibold">صفحتنا على فيسبوك</span>
                        </motion.a>
                    </motion.div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p className="font-arabic">
                        © 2024 مدرسة القرآن الكريم بمنشأة سلطان. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    )
}
