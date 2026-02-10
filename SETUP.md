# 🎯 Quick Start Guide

## 📋 Prerequisites Checklist

Before you begin, make sure you have:

- [ ] Node.js version 18 or higher installed
- [ ] npm, yarn, or pnpm package manager
- [ ] An n8n instance (cloud or self-hosted)
- [ ] A configured webhook in n8n

## 🔧 Step-by-Step Setup

### 1. Install Node.js (if not already installed)

Check if Node.js is installed:
```bash
node --version
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/) or install via package manager:

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install nodejs npm
```

**macOS:**
```bash
brew install node
```

### 2. Install Project Dependencies

Navigate to the project directory and install:

```bash
cd /home/medapp/quran-school
npm install
```

This will install:
- Next.js 14
- React & React DOM
- Tailwind CSS
- Framer Motion
- react-hook-form
- Lucide React icons
- TypeScript and all dev dependencies

### 3. Configure n8n Webhook

#### Option A: Using n8n Cloud

1. Log in to your n8n cloud account
2. Create a new workflow
3. Add a **Webhook** node
4. Set the webhook path (e.g., `/webhook/registration`)
5. Copy the webhook URL

#### Option B: Self-Hosted n8n

1. Start your n8n instance:
   ```bash
   npx n8n
   ```
2. Create a new workflow
3. Add a **Webhook** node
4. Configure it to receive POST requests
5. Copy the webhook URL (e.g., `http://localhost:5678/webhook/registration`)

#### Sample n8n Workflow

Your n8n workflow might look like this:

```
Webhook (POST) → Set Node → Send WhatsApp Message → Save to Database
```

**Webhook Configuration:**
- HTTP Method: POST
- Path: `/registration`
- Response Mode: Last Node

### 4. Set Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your webhook URL:

```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/registration
```

**Examples:**
- n8n Cloud: `https://your-username.app.n8n.cloud/webhook/registration`
- Self-hosted: `http://localhost:5678/webhook/registration`
- Production: `https://n8n.yourcompany.com/webhook/registration`

### 5. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at:
```
http://localhost:3000
```

### 6. Test the Registration Form

1. Open [http://localhost:3000](http://localhost:3000) in your browser
2. Scroll to the registration section
3. Fill out the form with test data:
   - **Full Name**: محمد أحمد
   - **National ID**: 12345678901234
   - **Age**: 25
   - **Education Type**: Azhari
   - **Education Stage**: University
   - **WhatsApp**: +20 1234567890
4. Click "Register Now"
5. Check your n8n workflow execution

### 7. Verify n8n Integration

In your n8n instance:
1. Go to **Executions** tab
2. You should see a new execution
3. Check the webhook data received
4. Verify the workflow completed successfully

## 🚀 Production Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variable:
   - Key: `NEXT_PUBLIC_N8N_WEBHOOK_URL`
   - Value: Your production n8n webhook URL
5. Deploy!

### Deploy to Other Platforms

- **Netlify**: Similar to Vercel
- **Railway**: Auto-deploy from GitHub
- **DigitalOcean App Platform**: Container deployment
- **AWS Amplify**: Full-stack deployment

## 🔒 Security Considerations

### 1. Secure Your Webhook

Add authentication to your n8n webhook:
- Use webhook authentication
- Add API keys
- Implement rate limiting

### 2. Environment Variables

- Never commit `.env.local` to version control
- Use different webhooks for dev/staging/prod
- Rotate webhook URLs periodically

### 3. Form Validation

The form includes:
- Client-side validation (react-hook-form)
- Input sanitization
- Type checking
- Length restrictions

## 🐛 Troubleshooting

### Issue: "Webhook URL is not configured"

**Solution**: Make sure `.env.local` exists and contains:
```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=your-webhook-url
```

Restart the dev server after creating/editing `.env.local`.

### Issue: CORS errors

**Solution**: In n8n webhook node, enable CORS:
- Set "Response Mode" to "Last Node"
- Add CORS headers in n8n

### Issue: Form submission fails

**Solution**:
1. Check browser console for errors
2. Verify webhook URL is correct
3. Test webhook directly with curl:
   ```bash
   curl -X POST https://your-webhook-url \
     -H "Content-Type: application/json" \
     -d '{"test":"data"}'
   ```
4. Check n8n workflow is active

### Issue: Styles not loading

**Solution**:
1. Delete `.next` folder:
   ```bash
   rm -rf .next
   ```
2. Restart dev server:
   ```bash
   npm run dev
   ```

## 📚 Next Steps

1. ✅ Customize the content in each section
2. ✅ Update school information in About section
3. ✅ Replace placeholder social media links
4. ✅ Add your school's real contact information
5. ✅ Configure your n8n workflow completely
6. ✅ Test the entire flow end-to-end
7. ✅ Deploy to production

## 📞 Need Help?

- Check the [README.md](README.md) for more details
- Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Review n8n documentation: [docs.n8n.io](https://docs.n8n.io)

---

**Happy Coding! 🎉**
