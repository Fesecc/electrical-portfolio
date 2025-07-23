# 📊 วิธีตรวจสอบขนาดและ Bandwidth เว็บไซต์

## 🎯 สิ่งที่ต้องรู้เรื่อง Vercel Bandwidth

### 💰 Vercel Free Plan Limits:
- **Bandwidth**: 100GB/เดือน
- **Function Executions**: 100GB-hrs/เดือน  
- **Edge Requests**: ไม่จำกัด

### 📈 การคำนวณ Bandwidth:
```
Bandwidth = ขนาดเว็บไซต์ × จำนวนผู้เข้าชม

ตัวอย่าง:
- เว็บไซต์ขนาด 3MB
- 100GB ÷ 3MB = 33,333 ครั้ง/เดือน
- หรือ 1,111 คนต่อวัน
```

---

## 🔍 วิธีตรวจสอบขนาดเว็บไซต์

### **Method 1: Browser DevTools (แนะนำ)**

1. **เปิดเว็บไซต์**
2. **กด F12** เปิด DevTools
3. **เข้าแท็บ Network**  
4. **รีเฟรชหน้า** (Ctrl+R)
5. **ดูที่มุมล่างขวา:**
   ```
   📊 ตัวอย่าง:
   - Requests: 25
   - Transferred: 2.1 MB
   - Resources: 2.8 MB
   - Finish: 1.2s
   ```

### **Method 2: เครื่องมือ Online**

#### 🌟 **เครื่องมือฟรีที่แนะนำ:**

1. **GTmetrix** - [gtmetrix.com](https://gtmetrix.com)
   - ✅ ฟรี
   - ✅ แสดงขนาดไฟล์ละเอียด
   - ✅ คำแนะนำการ optimize

2. **Google PageSpeed Insights** - [pagespeed.web.dev](https://pagespeed.web.dev)
   - ✅ ฟรี
   - ✅ จาก Google
   - ✅ แสดง Core Web Vitals

3. **Pingdom** - [tools.pingdom.com](https://tools.pingdom.com)
   - ✅ ฟรี (จำกัด)
   - ✅ แสดงขนาดรายไฟล์

### **Method 3: Command Line Tools**

#### **ใช้ curl:**
```bash
# ตรวจสอบขนาด HTML หลัก
curl -s https://your-domain.com | wc -c

# ตรวจสอบ HTTP headers
curl -I https://your-domain.com
```

#### **ใช้ wget:**
```bash
# Download และดูขนาด
wget --spider --server-response https://your-domain.com 2>&1 | grep "Content-Length"
```

---

## 📊 ตรวจสอบ Bandwidth Usage ใน Vercel

### **ใน Vercel Dashboard:**

1. **เข้า** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **คลิกโปรเจคของคุณ**
3. **เข้าแท็บ "Analytics"**
4. **ดูส่วน "Data Transfer":**
   ```
   📈 ตัวอย่าง:
   - This month: 5.2 GB / 100 GB
   - Page views: 1,250
   - Unique visitors: 850
   ```

### **การแจ้งเตือน:**
- Vercel จะแจ้งเตือนเมื่อใช้ 80%
- แจ้งเตือนอีกครั้งเมื่อใช้ 90%
- หยุดให้บริการเมื่อใช้ครบ 100%

---

## 🎯 ขนาดที่คาดการณ์สำหรับเว็บไซต์เรา

### **Breakdown โดยประมาณ:**

| ส่วนประกอบ | ขนาด | หมายเหตุ |
|------------|------|----------|
| **HTML** | 20-50KB | หน้าเว็บหลัก |
| **CSS (Tailwind)** | 200-400KB | Compressed |
| **JavaScript (Next.js)** | 600-1,200KB | Framework + Code |
| **Fonts** | 100-200KB | Google Fonts |
| **Icons** | 50-100KB | Heroicons |
| **Images** | 0-500KB | ยังไม่มีรูป |
| **รวม** | **1-2.5MB** | **ต่อการโหลด** |

### **การใช้ Bandwidth คาดการณ์:**

```
📊 Scenario Planning:

Conservative (2MB/visit):
- 100GB ÷ 2MB = 50,000 visits/เดือน
- 1,667 visits/วัน

Realistic (3MB/visit):  
- 100GB ÷ 3MB = 33,333 visits/เดือน
- 1,111 visits/วัน

Heavy (5MB/visit):
- 100GB ÷ 5MB = 20,000 visits/เดือน  
- 667 visits/วัน
```

---

## 🚀 วิธีลดขนาดเว็บไซต์

### **1. Image Optimization**
```bash
# ใช้ Next.js Image component
import Image from 'next/image'

# แทนที่ <img> ธรรมดา
<Image
  src="/image.jpg"
  alt="Description" 
  width={800}
  height={600}
  quality={75}  // ลดคุณภาพเล็กน้อย
/>
```

### **2. Code Splitting**
```jsx
// Lazy loading components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### **3. Font Optimization**
```jsx
// ใน layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',  // โหลดเร็วขึ้น
})
```

### **4. CSS Purging**
```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // เฉพาะไฟล์ที่ใช้จริง
  ],
  // ...
}
```

---

## ⚠️ เมื่อเกิน Bandwidth Limit

### **อาการที่จะเกิด:**
- เว็บไซต์แสดง Error 503 
- "Bandwidth limit exceeded"
- หยุดให้บริการจนถึงเดือนหน้า

### **วิธีแก้:**
1. **Upgrade เป็น Pro Plan** ($20/เดือน)
2. **ใช้ CDN เพิ่มเติม** (Cloudflare)
3. **ย้ายไป hosting อื่น**
4. **ลดขนาดเว็บไซต์**

---

## 🎯 Monitoring & Alerts

### **ตั้งการแจ้งเตือน:**

1. **Email Notifications** ใน Vercel
2. **Google Analytics** - ดู page views
3. **Uptime Monitoring** - [uptimerobot.com](https://uptimerobot.com)

### **ติดตามประจำ:**
- เช็ค bandwidth usage ทุกสัปดาห์
- ดู page views ใน analytics  
- ตรวจสอบความเร็วเว็บไซต์

---

## 📈 สรุป

สำหรับเว็บไซต์ portfolio ของเรา:

✅ **ขนาดเล็ก** (~2MB)  
✅ **รองรับ 1,000+ คน/วัน**  
✅ **เพียงพอสำหรับการใช้งานจริง**  
✅ **ไม่ต้องกังวลใน 6 เดือนแรก**

**คำแนะนำ:** เริ่มใช้ฟรีไปก่อน มาดูสถิติทีหลัง! 🚀 