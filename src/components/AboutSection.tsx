'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Star } from 'lucide-react'

export default function AboutSection() {
    return (
        <section className="section-container bg-gradient-to-b from-white to-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    <span className="text-gradient">من نحن</span>
                    <span className="block text-3xl sm:text-4xl mt-2 text-gray-700">About Our School</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-islamic-emerald to-islamic-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                    {
                        icon: Heart,
                        title: 'رسالتنا',
                        titleEn: 'Our Mission',
                        description: 'نسعى لتعليم القرآن الكريم بأحدث الأساليب التربوية مع الحفاظ على الأصالة والروحانية',
                        descriptionEn: 'We strive to teach the Holy Quran using modern educational methods while preserving authenticity and spirituality',
                        color: 'islamic-emerald'
                    },
                    {
                        icon: Target,
                        title: 'هدفنا',
                        titleEn: 'Our Goal',
                        description: 'تخريج جيل من حفظة القرآن الكريم المتقنين لأحكام التلاوة والتجويد',
                        descriptionEn: 'Graduating a generation of Quran memorizers proficient in recitation and Tajweed rules',
                        color: 'islamic-gold'
                    },
                    {
                        icon: Star,
                        title: 'قيمنا',
                        titleEn: 'Our Values',
                        description: 'الإخلاص، التميز، الاحترافية، والتطوير المستمر لخدمة كتاب الله',
                        descriptionEn: 'Sincerity, excellence, professionalism, and continuous development in serving the Book of Allah',
                        color: 'emerald-600'
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="card group"
                    >
                        <div className={`w-16 h-16 bg-${item.color} rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-2 font-arabic text-gray-900">
                            {item.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-center mb-4 text-gray-600">
                            {item.titleEn}
                        </h4>
                        <p className="text-gray-600 text-center leading-relaxed mb-3 font-arabic text-lg">
                            {item.description}
                        </p>
                        <p className="text-gray-500 text-center leading-relaxed text-sm">
                            {item.descriptionEn}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Statistics */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-islamic-gradient rounded-2xl p-8 sm:p-12 shadow-islamic"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                    {[
                        { number: '500+', label: 'طالب', labelEn: 'Students' },
                        { number: '50+', label: 'معلم', labelEn: 'Teachers' },
                        { number: '10+', label: 'سنوات خبرة', labelEn: 'Years Experience' },
                        { number: '100%', label: 'نجاح', labelEn: 'Success Rate' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl sm:text-5xl font-bold mb-2 text-islamic-gold">
                                {stat.number}
                            </div>
                            <div className="text-lg font-semibold font-arabic">{stat.label}</div>
                            <div className="text-sm text-white/80">{stat.labelEn}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
