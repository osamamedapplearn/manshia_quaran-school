'use client'

import { motion } from 'framer-motion'
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react'
import image from 'next/image'
// 1. تأكدنا من استيراد مكون الصور من Next.js وحذفنا ImageIcon اللي مش محتاجينه
import Image from 'next/image'

const facebookPosts = [
    {
        id: 1,
        // 2. تحديث البيانات لتكون أكثر واقعية
        author: 'مدرسة القرآن الكريم بمنشأة سلطان',
        authorEn: 'Quran School',
        date: 'منذ 3 ساعات • 3 hrs ago',
        content: '📣 بشرى سارة لأهالينا الكرام..\n\nتم بحمد الله فتح باب التسجيل للدفعة الجديدة. نستقبل أبناءكم ليكونوا من أهل القرآن في بيئة تربوية آمنة وصحبة صالحة تعينهم على الخير.\n\nسارعوا بالتسجيل، فالأماكن محدودة!',
        likes: 14054,
        comments: 8657,
        shares: 354,
        image: '/images/schoollogo.jpg',
    }
]

export default function SocialProofSection() {
    return (
        <section className="py-24 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    <span className="text-primary">أحدث المنشورات</span>
                </h2>
                <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full opacity-80" />
            </motion.div>

            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                {facebookPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* رأس البوست */}
                        <div className="p-6 border-b border-gray-50 flex items-center gap-4 flex-row-reverse bg-gray-50/50">
                            {/* استخدام اللوجو الصغير بدلاً من حرف ق */}
                            <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-primary/20 shadow-sm bg-white p-1">
                                <Image
                                    src="/images/schoollogo.png" // تأكد أن هذا هو اسم ملف اللوجو عندك
                                    alt="شعار المدرسة"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex-1 text-right">
                                <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                                    {post.author}
                                </h4>
                                <div className="flex items-center justify-end gap-2 text-sm text-gray-500">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span className="text-primary font-medium">{post.authorEn}</span>
                                </div>
                            </div>
                        </div>

                        {/* محتوى البوست النصي */}
                        <div className="p-6 text-right">
                            <p className="text-gray-800 text-xl leading-relaxed font-medium whitespace-pre-line font-sans">
                                {post.content}
                            </p>
                        </div>

                        {/* 3. التغيير الرئيسي هنا: مكان الصورة الكبير */}
                        <div className="relative w-full h-80 md:h-96 bg-gray-50 flex flex-col items-center justify-center border-y border-gray-50 group cursor-pointer overflow-hidden p-8">
                            {/* خلفية زخرفية خفيفة جداً */}
                            <div className="absolute inset-0 opacity-[0.03] bg-islamic-pattern bg-repeat space bg-[length:300px_300px]" />

                            {/* حاوية اللوجو الكبير */}
                            <div className="relative w-56 h-56 md:w-72 md:h-72 transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src="/images/schoollogo.jpg" // تأكد من مسار اللوجو
                                    alt="شعار مدرسة القرآن"
                                    fill // يجعل الصورة تملأ الحاوية الأب
                                    // تأثيرات: باهت ورمادي في العادي، وملون وواضح عند الوقوف عليه
                                    className="object-contain opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500 drop-shadow-sm"
                                />
                            </div>
                            <p className="text-primary font-bold mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">انقر لعرض التفاصيل</p>
                        </div>

                        {/* أزرار التفاعل */}
                        <div className="px-6 py-4 bg-white">
                            <div className="flex justify-between items-center text-gray-500 border-t pt-4">
                                <button className="flex items-center gap-2 hover:bg-gray-50 px-6 py-3 rounded-xl transition-all duration-300 group active:scale-95">
                                    <Share2 className="w-7 h-7 group-hover:text-blue-600 transition-colors" />
                                    <span className="font-bold text-lg">{post.shares}</span>
                                </button>

                                <button className="flex items-center gap-2 hover:bg-gray-50 px-6 py-3 rounded-xl transition-all duration-300 group active:scale-95">
                                    <MessageCircle className="w-7 h-7 group-hover:text-secondary transition-colors" />
                                    <span className="font-bold text-lg">{post.comments}</span>
                                </button>

                                <button className="flex items-center gap-2 hover:bg-gray-50 px-6 py-3 rounded-xl transition-all duration-300 group active:scale-95">
                                    <ThumbsUp className="w-7 h-7 group-hover:text-primary transition-colors" />
                                    <span className="font-bold text-lg">{post.likes}</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}