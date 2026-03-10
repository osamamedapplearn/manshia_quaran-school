'use client'

import { motion } from 'framer-motion'
import { Star, CheckCircle2 } from 'lucide-react'
import { UiVariant } from './uiVariant'

interface AboutSectionProps {
    variant?: UiVariant
}

export default function AboutSection({ variant = 'v1' }: AboutSectionProps) {
    const objectives = {
        icon: Star,
        title: 'أهداف المدرسة',
        titleEn: 'Our Objectives',
        goals: [
            'تصحيح تلاوة القرآن الكريم',
            'تحفيظ القرآن الكريم',
            'العناية بتعليم تجويد القرآن الكريم',
            'غرس تعظيم كتاب الله تعالى لدى المجتمع'
        ],
    }

    const sectionClassName =
        variant === 'v1'
            ? 'section-container bg-gradient-to-b from-white to-gray-50'
            : variant === 'v2'
                ? 'section-container bg-transparent'
                : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-transparent relative z-10'

    return (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }} id="about" className={sectionClassName}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-arabic">
                    <span className={variant === 'v3' ? 'text-[#EAB308]' : 'bg-gradient-to-r from-islamic-emerald via-islamic-gold to-islamic-emerald bg-clip-text text-transparent'}>
                        من نحن
                    </span>
                </h2>
                <p className={`text-lg mb-4 ${variant === 'v3' ? 'text-[#064e3b]/80' : variant === 'v2' ? 'text-gray-800 font-semibold' : 'text-gray-600'}`}>About Us</p>
                <div className="w-24 h-1 bg-gradient-to-r from-islamic-emerald to-islamic-gold mx-auto rounded-full" />
            </motion.div>

            <div className={`flex justify-center ${variant === 'v2' || variant === 'v3' ? 'max-w-6xl mx-auto' : ''}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className={`relative overflow-hidden group transition-all duration-300 w-full ${
                        variant === 'v1'
                            ? 'bg-white rounded-2xl shadow-lg border-t-4 border-islamic-gold max-w-lg hover:shadow-2xl'
                            : variant === 'v2'
                                ? 'bento-shell max-w-6xl p-5 sm:p-8'
                                : 'glass-shell max-w-6xl p-5 sm:p-8 text-white'
                    }`}
                >
                    <div className={`absolute inset-0 ${variant === 'v3' ? 'bg-gradient-to-br from-white/15 via-transparent to-islamic-gold/10' : 'bg-gradient-to-br from-emerald-50/60 to-amber-50/30'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className={`relative ${variant === 'v2' || variant === 'v3' ? `grid grid-cols-1 md:grid-cols-12 ${variant === 'v3' ? 'gap-10' : 'gap-4'}` : ''}`}>
                        <div className={`${variant === 'v2' || variant === 'v3' ? 'md:col-span-7' : ''} p-3 sm:p-4`}>
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 shadow-lg ${variant === 'v3' ? 'bg-white/40 border border-[#064e3b]/20' : 'bg-islamic-emerald'}`}>
                                <objectives.icon className={`w-10 h-10 ${variant === 'v3' ? 'text-[#064e3b]' : 'text-white'}`} strokeWidth={2.5} />
                            </div>

                            <h3 className={`text-2xl font-bold text-center mb-2 font-arabic ${variant === 'v3' ? 'text-[#064e3b]' : 'text-slate-900'}`}>
                                {objectives.title}
                            </h3>
                            <p className={`text-center text-sm mb-4 font-semibold ${variant === 'v3' ? 'text-[#064e3b]/80' : 'text-gray-500'}`}>
                                {objectives.titleEn}
                            </p>

                            <ul className="space-y-3">
                                {objectives.goals.map((goal, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.12, duration: 0.45 }}
                                        viewport={{ once: true }}
                                        className={`flex items-start justify-end md:justify-center md:justify-center gap-3 font-arabic text-base leading-[1.8] ${variant === 'v3' ? 'text-[#064e3b]/90' : 'text-gray-700'}`}
                                    >
                                        <span className="text-center md:text-center flex-1">{goal}</span>
                                        <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${variant === 'v3' ? 'text-[#064e3b]' : 'text-islamic-emerald'}`} />
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {(variant === 'v2' || variant === 'v3') && (
                            <div className={`md:col-span-5 grid grid-cols-1 ${variant === 'v3' ? 'gap-10' : 'gap-4'} p-3 sm:p-4`}>
                                {[['رسالتنا', 'تطبيقات تعليمية متقنة'], ['البيئة', 'احترافية وآمنة للطلاب'], ['الشراكة', 'تواصل فعّال مع الأسرة']].map((item, idx) => (
                                    <motion.div
                                        key={item[0]}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 + idx * 0.1, duration: 0.45 }}
                                        viewport={{ once: true }}
                                        className={`${variant === 'v2' ? 'bento-cell bg-slate-50 p-5' : 'glass-cell p-5'}`}
                                    >
                                        <p className={`text-lg font-bold font-arabic text-center md:text-center ${variant === 'v3' ? 'text-[#064e3b]' : 'text-slate-900'}`}>{item[0]}</p>
                                        <p className={`text-sm font-arabic text-center md:text-center mt-2 ${variant === 'v3' ? 'text-[#064e3b]/80' : 'text-slate-600'}`}>{item[1]}</p>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
