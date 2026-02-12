'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Star, BookOpen, Users, Award, Sparkles } from 'lucide-react'

export default function AboutSection() {
    return (
        <section id="about" className="section-container bg-islamic-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-islamic-green mb-4 font-arabic">
                    من نحن
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-islamic-green to-islamic-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                    {
                        icon: Target,
                        title: 'رؤيتنا',
                        description: 'تعليم أفراد المجتمع كتاب الله تعالى وتدبره والتخلق به من خلال أجود التطبيقات',
                        color: 'islamic-green'
                    },
                    {
                        icon: Heart,
                        title: 'رسالتنا',
                        description: 'تقديم برامج متميزة في تعليم القرآن الكريم تلاوةً وحفظاً وتدبراً في بيئة احترافية آمنة من خلال كوادر مؤهلة وشراكة مجتمعية فاعلة',
                        color: 'islamic-gold'
                    },
                    {
                        icon: Star,
                        title: 'أهداف المدرسة',
                        goals: [
                            { text: 'تصحيح تلاوة القرآن الكريم', icon: BookOpen },
                            { text: 'تحفيظ القرآن الكريم', icon: Users },
                            { text: 'العناية بتعليم تجويد القرآن الكريم', icon: Award },
                            { text: 'غرس تعظيم كتاب الله تعالى لدى المجتمع', icon: Sparkles }
                        ],
                        color: 'islamic-green'
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
                        <div className={`w-16 h-16 ${item.color === 'islamic-gold' ? 'bg-islamic-gold' : 'bg-islamic-green'} rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4 font-arabic text-islamic-green">
                            {item.title}
                        </h3>
                        {item.goals ? (
                            <div className="space-y-3">
                                <ul className="text-right space-y-3">
                                    {item.goals.map((goal, idx) => (
                                        <li key={idx} className="flex items-center justify-end gap-2 text-gray-700 font-arabic text-base leading-relaxed">
                                            <span>{goal.text}</span>
                                            <goal.icon className="w-5 h-5 text-islamic-gold flex-shrink-0" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p className="text-gray-700 text-center leading-relaxed font-arabic text-base">
                                {item.description}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

