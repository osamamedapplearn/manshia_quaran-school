'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GallerySection() {
    const galleryImages = [
        {
            src: '/images/students-group.jpg',
            alt: 'طلاب المدرسة',
            title: 'طلابنا المتميزون',
            description: 'Our Distinguished Students'
        },
        {
            src: '/images/awards-ceremony.jpg',
            alt: 'حفل توزيع الجوائز',
            title: 'حفل التكريم',
            description: 'Awards Ceremony'
        },
        {
            src: '/images/quran-recitation.jpg',
            alt: 'تلاوة القرآن الكريم',
            title: 'تلاوة القرآن',
            description: 'Quran Recitation'
        }
    ]

    return (
        <section id="gallery" className="section-padding bg-gradient-to-br from-gray-50 to-white">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title font-arabic mb-4">
                        معرض الصور
                    </h2>
                    <p className="section-subtitle">
                        Gallery • لحظات من رحلتنا القرآنية
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl font-bold mb-2 font-arabic">
                                            {image.title}
                                        </h3>
                                        <p className="text-sm text-gray-200">
                                            {image.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
