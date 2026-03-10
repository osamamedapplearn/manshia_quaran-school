'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { UiVariant } from './uiVariant'

interface FooterProps {
    variant?: UiVariant
}

export default function Footer({ variant = 'v1' }: FooterProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

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

                    <div className="mt-4 flex justify-center">
                        <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/55 border border-green-100 shadow-[0_10px_24px_rgba(16,185,129,0.18)]">
                            <Image
                                src="/images/logo1.png"
                                alt="شعار مدرسة القرآن"
                                fill
                                className="object-contain p-2"
                                sizes="96px"
                            />
                        </div>
                    </div>

                    <p className={`mt-4 font-arabic text-sm sm:text-base ${variant === 'v3' ? 'text-[#064e3b]/85' : 'text-white/85'}`}>
                        صُنع بكل حُب بواسطة
                    </p>

                    {isMounted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                            className="mt-2 flex justify-center"
                        >
                            <motion.p
                                className={`font-signature text-3xl sm:text-4xl leading-loose ${variant === 'v3' ? 'text-[#064e3b]' : 'text-white'}`}
                                initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.35 }}
                                whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: 'easeInOut' }}
                            >
                                أسامة عطية مدبب
                            </motion.p>
                        </motion.div>
                    ) : (
                        <div className="mt-2 flex justify-center">
                            <p className={`font-signature text-3xl sm:text-4xl leading-loose ${variant === 'v3' ? 'text-[#064e3b]' : 'text-white'}`}>
                                أسامة عطية مدبب
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    )
}
