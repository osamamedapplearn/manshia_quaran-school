'use client'

import { motion } from 'framer-motion'
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react'
import Image from 'next/image'
import { UiVariant } from './uiVariant'


const facebookPosts = [
    {
        id: 1,
        author: 'مدرسة القرآن الكريم بمنشأة سلطان',
        authorEn: 'Quran School',
        date: 'منذ 3 ساعات • 3 hrs ago',
        content: 'بشرى سارة لأهالينا الكرام..\n\nتم بحمد الله فتح باب التسجيل للدفعة الجديدة. نستقبل أبناءكم ليكونوا من أهل القرآن في بيئة تربوية آمنة وصحبة صالحة تعينهم على الخير.\n\nسارعوا بالتسجيل، فالأماكن محدودة!',
        likes: 14054,
        comments: 8657,
        shares: 354,
        image: '/images/logo1.png',
    }
]

interface SocialProofSectionProps {
    variant?: UiVariant
}

export default function SocialProofSection({ variant = 'v1' }: SocialProofSectionProps) {
    const sectionClassName =
        variant === 'v1'
            ? 'py-24 bg-white'
            : variant === 'v2'
                ? 'py-24 bg-transparent'
                : 'relative z-10 py-24 bg-transparent'

    const cardClassName =
        variant === 'v1'
            ? 'w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300'
            : variant === 'v2'
                ? 'w-full max-w-6xl bento-shell p-5 sm:p-7'
                : 'w-full max-w-5xl glass-shell p-5 sm:p-7'

    return (
        <motion.section className={sectionClassName} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} aria-label="آخر منشورات المدرسة">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${variant === 'v3' ? 'text-[#EAB308]' : 'text-gray-900'}`}>
                    <span className={variant === 'v3' ? 'text-[#EAB308]' : 'text-islamic-emerald'}>أحدث المنشورات</span>
                </h2>
                <div className={`w-24 h-1.5 mx-auto rounded-full opacity-80 ${variant === 'v3' ? 'bg-[#EAB308]' : 'bg-secondary'}`} />
            </motion.div>

            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                {facebookPosts.map((post) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className={cardClassName}
                    >
                        <div className={`p-6 border-b flex items-center gap-4 flex-row-reverse ${variant === 'v3' ? 'border-white/20 bg-white/10' : 'border-gray-100 bg-gray-50/70'}`}>
                            <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-primary/20 shadow-sm bg-white p-1">
                                <Image
                                    src="/images/logo1.png"
                                    alt="شعار المدرسة"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex-1 text-center md:text-center">
                                <h4 className={`font-bold text-lg leading-tight mb-1 ${variant === 'v3' ? 'text-[#064e3b]' : 'text-gray-900'}`}>
                                    {post.author}
                                </h4>
                                <div className={`flex items-center justify-end md:justify-center md:justify-center gap-2 text-sm ${variant === 'v3' ? 'text-[#064e3b]/70' : 'text-gray-500'}`}>
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span className="text-islamic-emerald font-medium">{post.authorEn}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 text-center md:text-center">
                            <p className={`text-xl leading-[1.8] font-medium whitespace-pre-line font-sans ${variant === 'v3' ? 'text-[#064e3b]/90' : 'text-gray-800'}`}>
                                {post.content}
                            </p>
                        </div>

                        <div className={`relative w-full md:h-96 flex flex-col items-center justify-center border-y group cursor-pointer overflow-hidden p-6 ${variant === 'v2' ? 'h-auto md:grid md:grid-cols-12 md:gap-4 bg-white border-gray-100' : 'h-auto bg-white/10 border-white/20'}`}>
                            <div className={`absolute inset-0 opacity-[0.03] ${variant === 'v3' ? 'bg-white' : 'bg-islamic-pattern bg-repeat space bg-[length:300px_300px]'}`} />

                            <div className={`relative w-full max-w-3xl aspect-video transition-transform duration-500 group-hover:scale-105 ${variant === 'v2' ? 'md:col-span-7' : ''}`}>
                                <Image
                                    src="/images/schoollogo.jpg"
                                    alt="شعار مدرسة القرآن"
                                    fill
                                    className="object-cover opacity-35 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500 drop-shadow-sm"
                                />
                            </div>

                            {variant === 'v2' && (
                                <div className="md:col-span-5 grid grid-cols-1 gap-3 w-full mt-4 md:mt-0">
                                    {[['إجمالي التفاعل', `${post.likes + post.comments + post.shares}`], ['معدل المشاركة', 'مرتفع'], ['نمو المجتمع', 'مستمر']].map((item) => (
                                        <div key={item[0]} className="bento-cell p-4 text-center md:text-center">
                                            <p className="text-slate-500 text-sm font-arabic">{item[0]}</p>
                                            <p className="text-slate-900 text-xl font-bold font-arabic mt-1">{item[1]}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <p className={`font-bold mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 ${variant === 'v3' ? 'text-[#064e3b]' : 'text-primary'}`}>انقر لعرض التفاصيل</p>
                        </div>

                        <div className={`px-6 py-4 ${variant === 'v3' ? 'bg-white/10' : 'bg-white'}`}>
                            <div className={`flex justify-between items-center border-t pt-4 ${variant === 'v3' ? 'text-[#064e3b]/80 border-[#064e3b]/20' : 'text-gray-500'}`}>
                                <button type="button" aria-label="مشاركة المنشور" className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 group active:scale-95 ${variant === 'v3' ? 'hover:bg-white/10' : 'hover:bg-gray-50'}`}>
                                    <Share2 className="w-7 h-7 group-hover:text-blue-600 transition-colors" />
                                    <span className="font-bold text-lg">{post.shares}</span>
                                </button>

                                <button type="button" aria-label="تعليقات المنشور" className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 group active:scale-95 ${variant === 'v3' ? 'hover:bg-white/10' : 'hover:bg-gray-50'}`}>
                                    <MessageCircle className="w-7 h-7 group-hover:text-secondary transition-colors" />
                                    <span className="font-bold text-lg">{post.comments}</span>
                                </button>

                                <button type="button" aria-label="إعجابات المنشور" className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 group active:scale-95 ${variant === 'v3' ? 'hover:bg-white/10' : 'hover:bg-gray-50'}`}>
                                    <ThumbsUp className="w-7 h-7 group-hover:text-islamic-emerald transition-colors" />
                                    <span className="font-bold text-lg">{post.likes}</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}