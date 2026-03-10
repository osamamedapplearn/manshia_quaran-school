'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { UiVariant } from './uiVariant'

interface GallerySectionProps {
    variant?: UiVariant
}

export default function GallerySection({ variant = 'v1' }: GallerySectionProps) {
    const galleryImages = [
        { src: '/images/1.jpg', },
        { src: '/images/2.jpg', },
        { src: '/images/3.jpg', },
        { src: '/images/4.jpg', },
        { src: '/images/5.jpg', },
        { src: '/images/6.jpg', },
        { src: '/images/7.jpg', },
        { src: '/images/8.jpg', },
        { src: '/images/9.jpg', },
        { src: '/images/10.jpg', },
        { src: '/images/11.jpg', },
        { src: '/images/12.jpg', },
        { src: '/images/13.jpg', },
        { src: '/images/14.jpg', },
        { src: '/images/15.jpg', },
        { src: '/images/16.jpg', },
        { src: '/images/17.jpg', },
        { src: '/images/18.jpg', },
        { src: '/images/19.jpg', },
        { src: '/images/20.jpg', },
        { src: '/images/21.jpg', },


    ]

    const sectionClassName =
        variant === 'v1'
            ? 'py-20 bg-gray-50'
            : variant === 'v2'
                ? 'py-20 bg-transparent'
                : 'relative z-10 py-24 bg-transparent'

    const cardClassName =
        variant === 'v1'
            ? 'group relative h-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white'
            : variant === 'v2'
                ? 'group relative h-72 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)]'
                : 'group relative h-72 rounded-3xl overflow-hidden border border-green-100 bg-white/25 backdrop-blur-xl shadow-[0_10px_26px_rgba(16,185,129,0.14)]'

    const v3Heights = ['h-72', 'h-80', 'h-96', 'h-80', 'h-72']

    return (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} id="gallery" className={sectionClassName} aria-label="معرض صور المدرسة">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl font-bold mb-4 font-arabic ${variant === 'v3' ? 'text-[#EAB308]' : 'text-islamic-emerald'}`}>
                        معرض الصور
                    </h2>
                    <p className={`text-lg ${variant === 'v3' ? 'text-[#064e3b]/80' : 'text-gray-600'}`}>
                        لحظات لا تُنسى من رحلتنا القرآنية المباركة
                    </p>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Gallery Grid */}
                <div className={variant === 'v3' ? 'columns-1 sm:columns-2 lg:columns-3 gap-10 [column-fill:_balance]' : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${variant === 'v2' ? 'auto-rows-[18rem]' : ''}`}>
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${cardClassName} ${variant === 'v3' ? `mb-12 break-inside-avoid ${v3Heights[index % v3Heights.length]}` : ''} ${variant === 'v2' && index % 5 === 0 ? 'lg:col-span-2' : ''} ${variant === 'v2' && index % 7 === 0 ? 'md:row-span-2 h-full min-h-[24rem]' : ''}`}
                        >
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={image.src}
                                    alt="خلفية صورة من أنشطة المدرسة"
                                    fill
                                    className={`object-cover blur-xl scale-125 ${variant === 'v3' ? 'opacity-35' : 'opacity-50'}`}
                                />
                            </div>

                            <div className="relative z-10 h-full w-full flex items-center justify-center p-4">
                                <div className={`relative ${variant === 'v3' ? 'w-full aspect-video' : 'w-auto h-full aspect-square max-h-[90%]'} shadow-2xl rounded-3xl overflow-hidden border-4 border-white transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1`}>
                                    <Image
                                        src={image.src}
                                        alt={`صورة رقم ${index + 1} من معرض المدرسة`}
                                        fill
                                        className={`${variant === 'v3' ? 'object-cover bg-white/10' : 'object-contain bg-gray-100'}`}
                                    />
                                </div>
                            </div>

                            <div className={`absolute bottom-0 inset-x-0 z-20 backdrop-blur-sm p-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t ${variant === 'v3' ? 'bg-white/10 border-white/20' : 'bg-white/90 border-gray-100'}`}>
                                <span className={`font-bold text-sm ${variant === 'v3' ? 'text-[#064e3b]' : 'text-primary'}`}>
                                    معرض الصور
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}