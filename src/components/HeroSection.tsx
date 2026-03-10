'use client'

import { motion } from 'framer-motion'
import { BookOpen, Phone } from 'lucide-react'

export default function HeroSection() {
    return (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.5 }} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Subtle Islamic Pattern Background */}
            <div className="absolute inset-0 bg-islamic-pattern-light opacity-50" />

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-islamic-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-islamic-green/5 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-islamic-green mb-6 font-arabic leading-tight"
                    >
                        مدرسة القرآن بمنشأة سلطان
                    </motion.h1>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`mb-8 md:mb-16`}
                    >
                        <div className="inline-flex items-center gap-2 mb-3">
                            <div className="w-8 h-1 bg-islamic-gold rounded-full" />
                            <h2 className="text-xl sm:text-2xl font-bold text-islamic-gold font-arabic">
                                رؤيتنا
                            </h2>
                            <div className="w-8 h-1 bg-islamic-gold rounded-full" />
                        </div>
                        <p className="text-xl sm:text-2xl lg:text-3xl text-[#064e3b] max-w-4xl mx-auto leading-loose font-arabic">
                            تعليم أفراد المجتمع كتاب الله تعالى وتدبره والتخلق به من خلال أجود التطبيقات
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center gap-2 mb-3">
                            <div className="w-6 h-1 bg-islamic-green rounded-full" />
                            <h3 className="text-lg sm:text-xl font-bold text-islamic-green font-arabic">
                                رسالتنا
                            </h3>
                            <div className="w-6 h-1 bg-islamic-green rounded-full" />
                        </div>
                        <p className="text-lg sm:text-xl text-[#064e3b] max-w-3xl mx-auto leading-loose font-arabic">
                            تقديم برامج متميزة في تعليم القرآن الكريم تلاوةً وحفظاً وتدبراً في بيئة احترافية آمنة من خلال كوادر مؤهلة وشراكة مجتمعية فاعلة
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {/* Primary Button - Green Background with Gold Accent */}
                        <motion.a
                            href="/register" // تأكد من رابط صفحة التسجيل
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-islamic-emerald hover:bg-emerald-700 text-white font-bold text-lg rounded-full transition-all duration-300 border-2 border-islamic-gold/30 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-600/40 font-arabic"
                        >
                            <BookOpen className="w-6 h-6" />
                            <span>سجل الآن</span>
                        </motion.a>

                        {/* Secondary Button - Green Outline */}
                        <motion.a
                            href="https://wa.me/201158118765"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white font-bold text-lg rounded-full transition-all duration-300 font-arabic"
                        >
                            <Phone className="w-6 h-6" />
                            <span>تواصل معنا</span>
                        </motion.a>
                    </motion.div>

                    {/* Feature Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    >
                        {[
                            { icon: '📖', title: 'تحفيظ متقن', desc: 'برامج حفظ احترافية' },
                            { icon: '👨‍🏫', title: 'معلمون مؤهلون', desc: 'كوادر ذات خبرة عالية' },
                            { icon: '🤝💖', title: 'صحبة صالحة', desc: 'بيئة إيمانية تعينك على الخير' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-white rounded-xl p-6 shadow-[0_8px_24px_rgba(16,185,129,0.12)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.18)] transition-all duration-300 border border-green-100 min-h-[220px] flex flex-col"
                            >
                                <motion.div animate={{ y: [-5, 5] }} transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: index * 0.2 }} >
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                </motion.div>
                                <h4 className="text-xl font-bold text-islamic-green mb-2 font-arabic leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-[#064e3b] font-arabic text-base leading-loose">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
