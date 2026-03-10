'use client'

import { motion } from 'framer-motion'
import { UiVariant } from './uiVariant'

interface FooterProps {
    variant?: UiVariant
}

export default function Footer({ variant = 'v1' }: FooterProps) {
    const footerClassName =
        variant === 'v1'
            ? 'bg-gray-900 text-white'
            : variant === 'v2'
                ? 'bg-slate-950 text-white'
                : 'relative z-10 bg-transparent text-[#064e3b]'

    return (
        <footer className={footerClassName}>
            <div className={`${variant === 'v3' ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 glass-shell' : 'section-container'}`}>
                <div className={`border-t pt-8 text-center ${variant === 'v3' ? 'border-[#064e3b]/20 text-[#064e3b]' : 'border-gray-800 text-gray-400'}`}>
                    <p className="font-arabic text-xl sm:text-2xl font-bold mb-3">
                        مدرسة القرآن الكريم بمنشأة سلطان
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="mt-4 flex justify-center"
                    >
                        <div className="flex flex-col items-center leading-none">
                            <motion.p
                                className={`font-mono text-3xl sm:text-4xl font-black tracking-[0.2em] ${variant === 'v3' ? 'text-[#064e3b]' : 'text-white'}`}
                                animate={{ y: [0, -1, 0] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                O.A.M
                            </motion.p>

                            <p className={`mt-1 text-[11px] sm:text-xs font-semibold tracking-[0.42em] uppercase ${variant === 'v3' ? 'text-[#064e3b]/85' : 'text-white/80'}`}>
                                MEDAPP
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}
