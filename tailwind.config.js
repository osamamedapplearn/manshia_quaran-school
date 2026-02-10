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
                islamic: {
                    emerald: '#10b981',
                    'emerald-dark': '#059669',
                    'emerald-light': '#34d399',
                    gold: '#f59e0b',
                    'gold-dark': '#d97706',
                    'gold-light': '#fbbf24',
                },
            },
            fontFamily: {
                arabic: ['Scheherazade New', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'islamic-pattern': "url('/islamic-pattern.svg')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
