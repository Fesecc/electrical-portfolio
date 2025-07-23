# ⚡ Electrical Engineering Portfolio Website

เว็บไซต์ portfolio สำหรับวิศวกรไฟฟ้ามืออาชีพ สร้างด้วย Next.js, TypeScript และ Tailwind CSS

![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## 🌟 ฟีเจอร์หลัก

- 🏠 **หน้าแรก** - Hero section + บริการหลัก + ผลงานเด่น
- 👨‍💼 **เกี่ยวกับเรา** - ประสบการณ์ + สถิติ + ใบรับรอง
- 💼 **ผลงาน** - แสดงโครงการที่ผ่านมา 6 โครงการ
- 🔧 **บริการ** - บริการครบวงจร + ราคา + ขั้นตอนการทำงาน
- 📞 **ติดต่อ** - ข้อมูลติดต่อ + แบบฟอร์มติดต่อ

## 🚀 เริ่มต้นใช้งาน

### ✅ ข้อกำหนดระบบ

- Node.js 18+ 
- npm หรือ yarn
- Git

### 📥 ติดตั้ง

```bash
# Clone repository
git clone https://github.com/username/electrical-portfolio.git
cd electrical-portfolio

# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### 🔧 คำสั่งที่ใช้บ่อย

```bash
# Development
npm run dev

# Build สำหรับ production
npm run build

# รัน production server
npm start

# ตรวจสอบ code quality
npm run lint
```

## 📁 โครงสร้างโปรเจค

```
electrical-portfolio/
├── src/
│   ├── app/
│   │   ├── about/page.tsx        # หน้าเกี่ยวกับเรา
│   │   ├── portfolio/page.tsx    # หน้าผลงาน
│   │   ├── services/page.tsx     # หน้าบริการ
│   │   ├── contact/page.tsx      # หน้าติดต่อ
│   │   ├── layout.tsx            # Layout หลัก
│   │   ├── page.tsx              # หน้าแรก
│   │   └── globals.css           # CSS หลัก
│   └── components/
│       ├── Header.tsx            # Navigation bar
│       └── Footer.tsx            # Footer
├── public/                       # Static files
├── DEPLOYMENT_GUIDE.md          # คู่มือ deploy
└── README.md                    # ไฟล์นี้
```

## 🎨 เทคโนโลยีที่ใช้

### 🖥️ Frontend
- **Next.js 15.4** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Heroicons** - Beautiful icons

### 🔧 Development Tools
- **ESLint** - Code linting
- **Git** - Version control

### ☁️ Deployment
- **Vercel** - Hosting (แนะนำ)
- **GitHub** - Code repository

## 📱 Responsive Design

เว็บไซต์รองรับทุกขนาดหน้าจอ:

- 📱 Mobile (320px+)
- 📟 Tablet (768px+) 
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🌐 SEO Optimization

- ✅ Meta tags ครบถ้วน
- ✅ Open Graph สำหรับ social media
- ✅ Twitter Cards
- ✅ Structured data
- ✅ Sitemap (auto-generated)
- ✅ SSL ready

## 🚀 การ Deploy

### 🏆 Vercel (แนะนำ)

1. Push code ไป GitHub
2. เชื่อมต่อ GitHub กับ Vercel
3. Auto-deploy ทุกครั้งที่ push

👉 **ดูคู่มือละเอียด**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### 💰 ค่าใช้จ่าย

- **Vercel**: ฟรี (เพียงพอสำหรับเว็บไซต์ส่วนตัว)
- **Domain**: ฿400-1,200/ปี
- **รวม**: ฿400-1,200/ปี

## 🛠️ การปรับแต่ง

### 📝 เปลี่ยนเนื้อหา

1. **ข้อมูลบริษัท**: แก้ไขใน `src/app/layout.tsx`
2. **ข้อมูลติดต่อ**: แก้ไขใน `src/app/contact/page.tsx`
3. **ผลงาน**: เพิ่ม/แก้ไขใน `src/app/portfolio/page.tsx`
4. **บริการ**: ปรับราคาใน `src/app/services/page.tsx`

### 🎨 เปลี่ยนสี

แก้ไขใน `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',  // สีหลัก
        600: '#2563eb',
      }
    }
  }
}
```

### 🖼️ เปลี่ยนรูปภาพ

1. เพิ่มรูปใน `public/`
2. แก้ไข path ใน components

## 📊 Analytics & SEO

### Google Analytics
```jsx
// ใน layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Google Search Console
1. Verify ownership
2. Submit sitemap: `https://your-domain.com/sitemap.xml`

## 🐛 การแก้ปัญหา

### ❌ ปัญหาที่พบบ่อย

**Navigation คลิกไม่ได้:**
- ตรวจสอบ z-index
- ลองรีเฟรชหน้าเว็บ

**Build error:**
```bash
npm run build
# แก้ errors ทั้งหมดก่อน deploy
```

**Vercel deployment failed:**
- ตรวจสอบ Node.js version
- ตรวจสอบ build command

## 📞 การสนับสนุน

- 📧 **Email**: support@electrical-portfolio.com
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/username/electrical-portfolio/issues)
- 📖 **Documentation**: [Next.js Docs](https://nextjs.org/docs)

## 📄 License

MIT License - ใช้งานได้ฟรีสำหรับทุกจุดประสงค์

## 🤝 Contributing

1. Fork repository
2. สร้าง feature branch
3. Commit changes
4. สร้าง Pull Request

## 📈 Roadmap

- [ ] เพิ่ม blog section
- [ ] เพิ่ม customer testimonials
- [ ] เพิ่ม online booking system
- [ ] เพิ่ม multi-language support

---

## 🎉 ขอบคุณ

ขอบคุณที่ใช้ Electrical Engineering Portfolio Template!

**Happy Coding!** ⚡🚀

---

*เว็บไซต์นี้สร้างด้วย ❤️ สำหรับวิศวกรไฟฟ้าไทย*
