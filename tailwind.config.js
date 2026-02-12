/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // 1. الألوان الأساسية (الهوية البصرية)
                primary: {
                    DEFAULT: '#10B981', // الأخضر الزمردي (Emerald)
                    light: '#34D399',   // درجة أفتح
                    dark: '#059669',    // درجة أغمق للـ Hover
                },
                secondary: {
                    DEFAULT: '#C5A065', // الذهبي
                    light: '#D8B985',
                    dark: '#8F7244',
                },

                // 2. الخلفيات (Backgrounds)
                background: {
                    DEFAULT: '#fdfbf7', // لون "الكريمي" الوقور للخلفية الأساسية
                    white: '#FFFFFF',   // أبيض ناصع
                    gray: '#F9FAFB',    // رمادي فاتح جداً
                },

                // 3. درجات الرمادي
                gray: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                },
            },

            fontFamily: {
                arabic: ['Cairo', 'Tajawal', 'Scheherazade New', 'serif'],
                sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
            },

            backgroundImage: {
                'islamic-pattern': "url('/images/islamic-pattern.svg')", // تأكد أن الصورة موجودة في public/images
                // تم تحديث الـ RGBA هنا ليتناسب مع اللون الأخضر الجديد (16, 185, 129)
                'islamic-pattern-light': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(16, 185, 129, 0.03) 10px, rgba(16, 185, 129, 0.03) 20px)',
                // تم تحديث الـ RGBA هنا ليتناسب مع اللون الذهبي (197, 160, 101)
                'gold-pattern-light': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(197, 160, 101, 0.05) 10px, rgba(197, 160, 101, 0.05) 20px)',
            },

            boxShadow: {
                // تم تحديث الظلال لتأخذ نفس درجة الأخضر والذهبي الجديدة
                'islamic': '0 4px 20px rgba(16, 185, 129, 0.15)',
                'gold': '0 4px 20px rgba(197, 160, 101, 0.15)',
                'soft': '0 2px 8px rgba(0, 0, 0, 0.05)',
            },
        },
    },
    plugins: [],
}