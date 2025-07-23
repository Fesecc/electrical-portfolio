# 🚀 คู่มือการนำเว็บไซต์ขึ้น Production

## 📋 สารบัญ
1. [ซื้อ Domain Name](#1-ซื้อ-domain-name)
2. [เตรียม Code Repository](#2-เตรียม-code-repository)
3. [เลือก Hosting Platform](#3-เลือก-hosting-platform)
4. [Deploy ด้วย Vercel (แนะนำ)](#4-deploy-ด้วย-vercel-แนะนำ)
5. [เชื่อมต่อ Custom Domain](#5-เชื่อมต่อ-custom-domain)
6. [ตั้งค่า DNS](#6-ตั้งค่า-dns)
7. [ปรับแต่งเพิ่มเติม](#7-ปรับแต่งเพิ่มเติม)
8. [ค่าใช้จ่าย](#8-ค่าใช้จ่าย)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. 🌐 ซื้อ Domain Name

### 🏪 ผู้ให้บริการแนะนำ

#### **ระดับโลก:**
- **Namecheap** - ราคาดี, จัดการง่าย
- **Cloudflare Domains** - ราคาต้นทุน, มี CDN ฟรี
- **GoDaddy** - ใหญ่, ง่าย แต่ราคาแพง

#### **ในประเทศไทย:**
- **Thai Domains** - สำหรับ .th และ .co.th
- **Hostinger Thailand** - ราคาดี
- **TrueDigital Park** - บริการไทย

### 💰 ราคา Domain

| TLD | ราคา/ปี | เหมาะสำหรับ |
|-----|---------|-------------|
| .com | ฿400-800 | ธุรกิจทั่วไป |
| .co.th | ฿800-1,200 | ธุรกิจไทย |
| .th | ฿1,500-3,000 | องค์กรไทย |
| .net | ฿500-900 | เทคโนโลยี |

### 📝 ขั้นตอนการซื้อ

1. **ค้นหาชื่อ Domain**
   ```
   ตัวอย่าง: electrical-engineer.com
            aod-engineering.co.th
            power-solutions.net
   ```

2. **เลือกระยะเวลา**
   - แนะนำ: 1-2 ปี (ลดความเสี่ยงลืมต่อ)

3. **เพิ่มบริการเสริม**
   - ✅ **Domain Privacy** (ซ่อนข้อมูลส่วนตัว)
   - ✅ **Auto-renewal** (ต่ออัตโนมัติ)
   - ❌ Web hosting (เราจะใช้ Vercel)

4. **ชำระเงิน**
   - Credit Card / PayPal / True Money

---

## 2. 📁 เตรียม Code Repository

### 🐙 Setup GitHub Repository

1. **สร้าง GitHub Account** (ถ้ายังไม่มี)
   - ไป [github.com](https://github.com)
   - สมัครฟรี

2. **สร้าง Repository ใหม่**
   ```bash
   # 1. คลิก "New Repository" บน GitHub
   # 2. ตั้งชื่อ: electrical-portfolio
   # 3. เลือก Public
   # 4. ไม่ต้องเพิ่ม README (เรามีแล้ว)
   ```

3. **Push Code ขึ้น GitHub**
   ```bash
   # ใน terminal ที่โฟลเดอร์โปรเจคของคุณ
   git remote add origin https://github.com/USERNAME/electrical-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### ✅ ตรวจสอบก่อน Deploy

- [ ] ทุกหน้าทำงานได้ปกติ (`npm run dev`)
- [ ] ไม่มี console errors
- [ ] Responsive design ใช้งานได้
- [ ] Navigation ทำงานได้
- [ ] Contact form ทำงานได้

---

## 3. ☁️ เลือก Hosting Platform

### 🏆 Vercel (แนะนำสำหรับ Next.js)

**ข้อดี:**
- ✅ ฟรีสำหรับโครงการส่วนตัว
- ✅ รองรับ Next.js โดยตรง
- ✅ Auto-deploy จาก GitHub
- ✅ Global CDN
- ✅ SSL Certificate ฟรี
- ✅ ตั้งค่าง่าย

**ข้อจำกัด:**
- 🔸 ฟรีแพลนมี bandwidth limit
- 🔸 Function timeout 10 วินาที

### 🛠️ ทางเลือกอื่น

| Platform | ราคา | เหมาะสำหรับ |
|----------|------|-------------|
| **Netlify** | ฟรี-$19/เดือน | Static sites |
| **Railway** | $5-20/เดือน | Full-stack apps |
| **DigitalOcean** | $5-50/เดือน | มี control เต็ม |

---

## 4. 🚀 Deploy ด้วย Vercel (แนะนำ)

### 📝 ขั้นตอนละเอียด

#### **Step 1: สมัคร Vercel**
1. ไป [vercel.com](https://vercel.com)
2. คลิก **"Sign Up"**
3. เลือก **"Continue with GitHub"**
4. อนุญาตให้ Vercel เข้าถึง GitHub

#### **Step 2: Import Project**
1. หลังจาก login แล้ว คลิก **"New Project"**
2. หา repository `electrical-portfolio`
3. คลิก **"Import"**

#### **Step 3: Configure Build Settings**
```
Project Name: electrical-portfolio
Framework Preset: Next.js (ตรวจสอบให้แน่ใจ)
Root Directory: ./
Build Command: npm run build (อัตโนมัติ)
Output Directory: .next (อัตโนมัติ)
Install Command: npm install (อัตโนมัติ)
```

#### **Step 4: Environment Variables (ถ้ามี)**
```bash
# ถ้าเว็บไซต์ใช้ API keys หรือ secrets
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=your-email@domain.com
```

#### **Step 5: Deploy**
1. คลิก **"Deploy"**
2. รอ 2-3 นาที
3. ได้ URL: `https://electrical-portfolio-username.vercel.app`

### ✅ ทดสอบ Deployment

1. **เปิด URL ที่ได้**
2. **ทดสอบทุกหน้า**
3. **ทดสอบบนมือถือ**
4. **ตรวจสอบ Console** (F12)

---

## 5. 🌐 เชื่อมต่อ Custom Domain

### 🔧 ใน Vercel Dashboard

1. **ไปที่ Project**
   - คลิกโปรเจคของคุณ

2. **เข้าหน้า Domains**
   - คลิก **"Settings"**
   - คลิก **"Domains"**

3. **เพิ่ม Domain**
   ```
   Domain: electrical-engineer.com
   และ
   Domain: www.electrical-engineer.com
   ```

4. **Vercel จะแสดง DNS Records**
   ```
   Type: A
   Name: @
   Value: 76.76.19.61

   Type: CNAME
   Name: www  
   Value: cname.vercel-dns.com
   ```

---

## 6. ⚙️ ตั้งค่า DNS

### 📡 ที่ผู้ให้บริการ Domain

#### **ตัวอย่าง Namecheap:**
1. **เข้า Domain Dashboard**
2. **คลิก "Manage"**
3. **เข้าหน้า "Advanced DNS"**
4. **เพิ่ม Records:**

```
Type: A Record
Host: @
Value: 76.76.19.61
TTL: Automatic

Type: CNAME Record  
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

#### **ใช้ Cloudflare (แนะนำ):**

**ข้อดี:**
- 🚀 CDN ฟรี (เร็วขึ้น)
- 🛡️ DDoS Protection
- 📊 Analytics
- 🔒 SSL/TLS ฟรี

**ขั้นตอน:**
1. **สมัคร** [cloudflare.com](https://cloudflare.com)
2. **เพิ่ม domain**
3. **เปลี่ยน Nameservers** ที่ผู้ให้บริการ domain
4. **รอ 24-48 ชั่วโมง**

---

## 7. 🎨 ปรับแต่งเพิ่มเติม

### 📊 Google Analytics

1. **สร้าง GA Account**
   - ไป [analytics.google.com](https://analytics.google.com)

2. **ติดตั้งใน Next.js**
   ```bash
   npm install @next/third-parties
   ```

3. **เพิ่มใน layout.tsx:**
   ```jsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     )
   }
   ```

### 🔍 Google Search Console

1. **เข้า** [search.google.com/search-console](https://search.google.com/search-console)
2. **เพิ่ม property** ด้วย domain
3. **Verify ownership** ด้วย DNS record
4. **Submit sitemap:** `https://your-domain.com/sitemap.xml`

### 📧 Contact Form ที่ทำงานได้

#### **ใช้ EmailJS (ฟรี):**

1. **สมัคร** [emailjs.com](https://emailjs.com)
2. **ติดตั้ง:**
   ```bash
   npm install @emailjs/browser
   ```
3. **เพิ่มใน Contact form:**
   ```jsx
   import emailjs from '@emailjs/browser';
   
   const sendEmail = (formData) => {
     emailjs.send(
       'service_id',
       'template_id', 
       formData,
       'user_id'
     );
   };
   ```

---

## 8. 💰 ค่าใช้จ่าย

### 📊 ตารางค่าใช้จ่ายรายปี

| รายการ | ฟรี | Pro | เหมาะสำหรับ |
|--------|-----|-----|-------------|
| **Domain** | - | ฿400-1,200 | จำเป็น |
| **Vercel Hosting** | ✅ | $20/เดือน | ฟรีเพียงพอ |
| **Cloudflare** | ✅ | $20/เดือน | ฟรีเพียงพอ |
| **Email Service** | ✅ | $5-15/เดือน | ฟรีเพียงพอ |
| **SSL Certificate** | ✅ | - | ฟรีจาก Vercel |
| **รวมปีแรก** | **฿400-1,200** | **$300+** | **แนะนำเริ่มฟรี** |

### 🎯 แผนการใช้เงิน

#### **Phase 1: ทดลอง (ฟรี)**
- Vercel subdomain: `project.vercel.app`
- ทดสอบทุกอย่าง

#### **Phase 2: มี Domain (฿400-1,200/ปี)**
- ซื้อ domain + เชื่อมต่อ
- เหมาะสำหรับธุรกิจจริง

#### **Phase 3: Scale Up ($20+/เดือน)**
- เมื่อมี traffic เยอะ
- ต้องการ features เพิ่มเติม

---

## 9. 🔧 Troubleshooting

### ❌ ปัญหาที่พบบ่อย

#### **Domain ไม่เชื่อมต่อ**
```bash
# ตรวจสอบ DNS
nslookup your-domain.com

# ต้องได้ IP: 76.76.19.61
```

**วิธีแก้:**
- รอ 24-48 ชั่วโมง (DNS propagation)
- ตรวจสอบ DNS records ให้ถูกต้อง
- ลบ cache DNS: `ipconfig /flushdns` (Windows)

#### **Build Error**
```bash
# ตรวจสอบ local build
npm run build

# แก้ errors ทั้งหมดก่อน push
```

#### **404 Error หลัง Deploy**
- ตรวจสอบ file paths
- ตรวจสอบ case sensitivity
- ตรวจสอบ `next.config.js`

### 📞 ขอความช่วยเหลือ

- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Cloudflare Community:** [community.cloudflare.com](https://community.cloudflare.com)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

## ✅ Checklist ก่อน Go Live

### 🎯 Pre-Launch

- [ ] ทุกหน้าทำงานได้ปกติ
- [ ] Mobile responsive
- [ ] SEO meta tags ครบ
- [ ] Contact form ทำงานได้
- [ ] Images โหลดเร็ว
- [ ] No console errors
- [ ] SSL Certificate (🔒 สีเขียว)

### 🚀 Post-Launch

- [ ] Google Analytics ติดตั้งแล้ว
- [ ] Google Search Console verify แล้ว
- [ ] Submit sitemap
- [ ] ทดสอบ speed: [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] ทดสอบ SEO: [seoptimer.com](https://seoptimer.com)

---

## 🎉 ยินดีด้วย!

เว็บไซต์ของคุณพร้อม online แล้ว! 🌟

**URL ตัวอย่าง:**
- Development: `http://localhost:3000`
- Staging: `https://electrical-portfolio-username.vercel.app`
- Production: `https://your-domain.com`

### 📈 ขั้นตอนต่อไป

1. **Marketing**: Social media, Google Ads
2. **SEO**: Content marketing, backlinks  
3. **Analytics**: ติดตาม traffic และ conversions
4. **Updates**: เพิ่มผลงานใหม่เป็นประจำ

---

*สร้างโดย: AOD Engineering Portfolio Project*  
*อัพเดทล่าสุด: 2025* 