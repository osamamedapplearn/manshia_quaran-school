'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Star, CheckCircle2 } from 'lucide-react'

export default function AboutSection() {
    const sections = [
        {
            icon: Eye,
            title: 'رؤيتنا',
            titleEn: 'Our Vision',
            description: 'تعليم أفراد المجتمع كتاب الله تعالى وتدبره والتخلق به من خلال أجود التطبيقات',
            color: 'emerald',
            borderColor: 'border-islamic-emerald',
            bgGradient: 'from-islamic-emerald/5 to-islamic-emerald/10',
            iconBg: 'bg-islamic-emerald',
            iconRing: 'ring-2 ring-islamic-gold/40',
            textColor: 'text-islamic-emerald'
        },
        {
            icon: Target,
            title: 'رسالتنا',
            titleEn: 'Our Mission',
            description: 'تقديم برامج متميزة في تعليم القرآن الكريم تلاوةً وحفظاً وتدبراً في بيئة احترافية آمنة من خلال كوادر مؤهلة وشراكة مجتمعية فاعلة',
            color: 'emerald',
            borderColor: 'border-islamic-emerald',
            bgGradient: 'from-emerald-50 to-emerald-100',
            iconBg: 'bg-islamic-emerald',
            iconRing: 'ring-4 ring-islamic-gold/50',
            textColor: 'text-emerald-700'
        },
        {
            icon: Star,
            title: 'أهداف المدرسة',
            titleEn: 'Our Objectives',
            goals: [
                'تصحيح تلاوة القرآن الكريم',
                'تحفيظ القرآن الكريم',
                'العناية بتعليم تجويد القرآن الكريم',
                'غرس تعظيم كتاب الله تعالى لدى المجتمع'
            ],
            color: 'blue',
            borderColor: 'border-blue-500',
            bgGradient: 'from-blue-50 to-blue-100',
            iconBg: 'bg-blue-500',
            textColor: 'text-blue-600'
        },
    ]

    return (
        <section id="about" className="section-container bg-gradient-to-b from-white to-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-arabic">
                    <span className="bg-gradient-to-r from-islamic-emerald via-islamic-gold to-islamic-emerald bg-clip-text text-transparent">
                        من نحن
                    </span>
                </h2>
                <p className="text-gray-600 text-lg mb-4">About Us</p>
                <div className="w-24 h-1 bg-gradient-to-r from-islamic-emerald to-islamic-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`relative bg-white rounded-2xl shadow-lg border-t-4 ${section.borderColor} overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                    >
                        {/* Gradient Background that intensifies on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                        <div className="relative p-8">
                            {/* Icon */}
                            <div className={`w-20 h-20 ${section.iconBg} ${section.iconRing || ''} rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                <section.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                            </div>

                            {/* Title */}
                            <h3 className={`text-2xl font-bold text-center mb-2 font-arabic ${section.textColor}`}>
                                {section.title}
                            </h3>
                            <p className="text-center text-gray-500 text-sm mb-4 font-semibold">
                                {section.titleEn}
                            </p>

                            {/* Content */}
                            {section.goals ? (
                                <ul className="space-y-3">
                                    {section.goals.map((goal, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2 + idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start justify-end gap-3 text-gray-700 font-arabic text-base leading-relaxed group/item"
                                        >
                                            <span className="text-right flex-1">{goal}</span>
                                            <CheckCircle2 className={`w-6 h-6 ${section.textColor} flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`} />
                                        </motion.li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700 text-center leading-relaxed font-arabic text-base">
                                    {section.description}
                                </p>
                            )}
                        </div>

                        {/* Bottom accent line */}
                        <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 ${section.iconBg} mx-auto`} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
