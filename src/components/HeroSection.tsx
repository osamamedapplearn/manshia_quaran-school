'use client'

import { motion } from 'framer-motion'
import { Sparkles, BookOpen, Users, Award } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-islamic-emerald via-emerald-600 to-islamic-emerald-dark">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
                    backgroundSize: '100px 100px'
                }} />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        initial={{
                            opacity: Math.random() * 0.5 + 0.2,
                        }}
                        animate={{
                            y: [0, Math.random() * -100 - 50],
                            opacity: [null, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center mb-6">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Sparkles className="w-16 h-16 text-islamic-gold" />
                        </motion.div>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-arabic leading-tight">
                        مدرسة القرآن الكريم
                    </h1>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                        Quran School
                    </h2>

                    <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                        انطلق في رحلة روحانية مع أفضل معلمي القرآن الكريم
                        <br />
                        <span className="text-lg sm:text-xl block mt-2">
                            Embark on a spiritual journey with the best Quran teachers
                        </span>
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {[
                            { icon: BookOpen, text: 'تحفيظ متقن', subtext: 'Expert Memorization' },
                            { icon: Users, text: 'معلمون مؤهلون', subtext: 'Qualified Teachers' },
                            { icon: Award, text: 'شهادات معتمدة', subtext: 'Certified Programs' },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 border border-white/20"
                            >
                                <feature.icon className="w-5 h-5 text-islamic-gold" />
                                <div className="text-right">
                                    <div className="text-white font-semibold text-sm">{feature.text}</div>
                                    <div className="text-white/70 text-xs">{feature.subtext}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a
                            href="#registration"
                            className="inline-block bg-islamic-gold hover:bg-islamic-gold-dark text-white font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-islamic transform hover:scale-105"
                        >
                            سجل الآن • Register Now
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-white/50 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
