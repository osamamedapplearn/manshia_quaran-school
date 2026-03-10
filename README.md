# 🕌 Quran School Landing Page

A high-converting, modern Islamic landing page with n8n automation integration for a Quran School. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🧩 UI Variant Routes

Three production-ready visual variants are available with the same functional logic:

- Version 1 (Ultra-Minimalist & Clean)
   - Home: `/`
   - Register: `/register`
- Version 2 (Modern & Bold)
   - Home: `/v2`
   - Register: `/register/v2`
- Version 3 (Corporate & Trustworthy)
   - Home: `/v3`
   - Register: `/register/v3`

All versions keep the same registration validation, conditional guardian fields, and n8n submission behavior.

### 🎨 **Modern Islamic Design**
- Serene color palette: Emerald Green (#10b981), Gold (#f59e0b), and White
- Smooth animations powered by Framer Motion
- Fully responsive and mobile-first design
- RTL (Right-to-Left) support for Arabic content
- Beautiful glassmorphism effects and gradients

### 📑 **Landing Page Sections**

1. **Hero Section**
   - Animated background with floating particles
   - Bilingual content (Arabic/English)
   - Feature highlights with smooth animations
   - Call-to-action button

2. **About Section**
   - Mission, Goal, and Values cards
   - Interactive hover effects
   - School statistics showcase

3. **Social Proof Section**
   - Facebook-style activity feed
   - Engagement metrics (likes, comments, shares)
   - Recent school updates and events

4. **Registration Form** ⭐
   - Smart form with comprehensive validation
   - n8n webhook integration
   - Real-time field validation
   - Professional input styling

### 📝 **Registration Form Fields**

All fields include bilingual labels and error messages:

1. **Full Name** - Text input with minimum 3 characters
2. **National ID (الرقم القومي)** - Exactly 14 digits validation
3. **Age** - Number input (5-100 years)
4. **Education Type** - Radio buttons:
   - Azhari (أزهري)
   - General (عام)
5. **Education Stage** - Dropdown:
   - Primary (ابتدائي)
   - Preparatory (إعدادي)
   - Secondary (ثانوي)
   - University (جامعي)
   - Graduated (خريج)
6. **WhatsApp Number** - Phone input with country code validation

### 🔗 **n8n Integration**

- Form submits via POST request to n8n webhook
- Loading state with spinner animation
- Success modal: "Registration Successful! We will contact you on WhatsApp."
- Error handling with user-friendly messages
- Auto-close success modal after 5 seconds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- n8n instance with webhook configured

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd /home/medapp/quran-school
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/registration
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
quran-school/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with RTL support
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles & Tailwind
│   └── components/
│       ├── HeroSection.tsx      # Hero with animations
│       ├── AboutSection.tsx     # Mission & values
│       ├── SocialProofSection.tsx  # Facebook feed
│       ├── RegistrationForm.tsx    # Smart form with n8n
│       └── Footer.tsx           # Footer component
├── package.json
├── tailwind.config.js           # Custom Islamic theme
├── tsconfig.json
└── .env.local.example
```

## 🎨 Design System

### Colors
- **Emerald Green**: Primary color (#10b981)
- **Gold**: Accent color (#f59e0b)
- **White**: Background
- **Gray Scale**: Text hierarchy

### Typography
- **Arabic**: Scheherazade New (Google Fonts)
- **English**: Inter (Google Fonts)

### Components
- Custom button styles (`.btn-primary`, `.btn-secondary`)
- Form input styles (`.input-field`)
- Card components (`.card`)
- Gradient utilities (`.text-gradient`, `.bg-islamic-gradient`)

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Form Management**: react-hook-form
- **Icons**: Lucide React
- **Automation**: n8n Webhook Integration

## 📱 Responsive Design

The landing page is fully responsive across all devices:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌐 n8n Webhook Setup

Your n8n workflow should expect a POST request with this JSON payload:

```json
{
  "fullName": "أحمد محمد",
  "nationalId": "12345678901234",
  "age": 25,
  "educationType": "azhari",
  "educationStage": "university",
  "whatsappNumber": "+20 1234567890",
  "timestamp": "2024-02-10T08:42:15.000Z"
}
```

## 🎯 Key Features

✅ Bilingual support (Arabic/English)  
✅ RTL layout for Arabic  
✅ Form validation with react-hook-form  
✅ n8n automation integration  
✅ Loading states & error handling  
✅ Success/error modals  
✅ Smooth animations  
✅ Mobile-first responsive design  
✅ SEO optimized  
✅ Professional Islamic aesthetic  

## 📄 License

This project is created for educational and commercial use.

## 🤝 Support

For any questions or support, please contact the development team.

---

**Built with ❤️ using Next.js and Vibe Coding principles**
