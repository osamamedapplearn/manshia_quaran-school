'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GallerySection() {
    // قمت بإصلاح البيانات وإضافة نصوص بديلة لتجنب الأخطاء
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

    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-primary mb-4 font-arabic">
                        معرض الصور
                    </h2>
                    <p className="text-gray-600 text-lg">
                        لحظات لا تُنسى من رحلتنا القرآنية المباركة
                    </p>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            // هذا التصميم عبارة عن كارت بحدود ناعمة
                            className="group relative h-72 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white"
                        >
                            {/* 1. الطبقة الخلفية: الصورة مكبرة جداً ومشوشة (Blur) لتعمل كخلفية ملونة */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={image.src}
                                    alt="background"
                                    fill
                                    className="object-cover blur-xl opacity-50 scale-125"
                                />
                            </div>

                            {/* 2. الطبقة الأمامية: الصورة بحجمها الطبيعي في المنتصف */}
                            <div className="relative z-10 h-full w-full flex items-center justify-center p-4">
                                <div className="relative w-auto h-full aspect-square max-h-[90%] shadow-2xl rounded-lg overflow-hidden border-4 border-white transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                                    <Image
                                        src={image.src}
                                        alt={image.category}
                                        fill
                                        className="object-contain bg-gray-100" // object-contain يمنع التمطيط
                                    />
                                </div>
                            </div>

                            {/* شريط العنوان السفلي */}
                            <div className="absolute bottom-0 inset-x-0 z-20 bg-white/90 backdrop-blur-sm p-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-gray-100">
                                <span className="text-primary font-bold text-sm">
                                    {image.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}