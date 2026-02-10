'use client'

import { motion } from 'framer-motion'
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react'
import Image from 'next/image'

const facebookPosts = [
    {
        id: 1,
        author: 'مدرسة القرآن الكريم',
        authorEn: 'Quran School',
        date: 'منذ يومين • 2 days ago',
        content: 'الحمد لله، تم اختتام حفل تكريم الطلاب المتفوقين في حفظ القرآن الكريم. نبارك لأبنائنا وبناتنا ونسأل الله أن يجعل القرآن شفيعاً لهم يوم القيامة.',
        contentEn: 'Alhamdulillah, we concluded the honoring ceremony for outstanding Quran memorization students. Congratulations to our sons and daughters.',
        likes: 234,
        comments: 45,
        shares: 12,
        image: '/posts/graduation.jpg'
    },
    {
        id: 2,
        author: 'مدرسة القرآن الكريم',
        authorEn: 'Quran School',
        date: 'منذ أسبوع • 1 week ago',
        content: 'جلسة تدريبية جديدة لمعلمي القرآن حول أحدث أساليب التدريس والتحفيظ. التطوير المستمر هو سر نجاحنا.',
        contentEn: 'New training session for Quran teachers on the latest teaching and memorization methods. Continuous development is the secret to our success.',
        likes: 189,
        comments: 28,
        shares: 8,
        image: '/posts/training.jpg'
    },
    {
        id: 3,
        author: 'مدرسة القرآن الكريم',
        authorEn: 'Quran School',
        date: 'منذ أسبوعين • 2 weeks ago',
        content: 'التسجيل مفتوح الآن للفصل الدراسي الجديد! انضم إلينا في رحلة حفظ القرآن الكريم مع نخبة من المعلمين المؤهلين.',
        contentEn: 'Registration is now open for the new semester! Join us in the journey of Quran memorization with elite qualified teachers.',
        likes: 456,
        comments: 89,
        shares: 34,
        image: '/posts/registration.jpg'
    },
]

export default function SocialProofSection() {
    return (
        <section className="section-container bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    <span className="text-gradient">آخر الأخبار</span>
                    <span className="block text-3xl sm:text-4xl mt-2 text-gray-700">Latest Updates</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-islamic-emerald to-islamic-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
                {facebookPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                    >
                        {/* Post Header */}
                        <div className="p-4 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-islamic-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    ق
                                </div>
                                <div className="flex-1 text-right">
                                    <h4 className="font-bold text-gray-900 font-arabic">{post.author}</h4>
                                    <p className="text-sm text-gray-500">{post.authorEn}</p>
                                    <p className="text-xs text-gray-400">{post.date}</p>
                                </div>
                            </div>
                        </div>

                        {/* Post Content */}
                        <div className="p-4">
                            <p className="text-gray-700 mb-3 text-right font-arabic leading-relaxed">
                                {post.content}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {post.contentEn}
                            </p>
                        </div>

                        {/* Post Image Placeholder */}
                        <div className="relative h-48 bg-gradient-to-br from-islamic-emerald/20 to-islamic-gold/20 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-islamic-emerald/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                                    <span className="text-3xl">📚</span>
                                </div>
                                <p className="text-sm text-gray-600 font-arabic">صورة من الفعالية</p>
                            </div>
                        </div>

                        {/* Post Actions */}
                        <div className="p-4 bg-gray-50 border-t border-gray-100">
                            <div className="flex justify-around items-center text-gray-600">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 hover:text-islamic-emerald transition-colors"
                                >
                                    <ThumbsUp className="w-5 h-5" />
                                    <span className="text-sm font-semibold">{post.likes}</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 hover:text-islamic-gold transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span className="text-sm font-semibold">{post.comments}</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                                >
                                    <Share2 className="w-5 h-5" />
                                    <span className="text-sm font-semibold">{post.shares}</span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
