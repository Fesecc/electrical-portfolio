# 📖 Development Guide

## 🚀 การเพิ่มฟีเจอร์ใหม่

### 📄 การเพิ่มหน้าใหม่
```bash
# 1. สร้างไฟล์หน้าใหม่
src/app/[page-name]/page.tsx

# 2. เพิ่ม link ใน Header.tsx
src/components/Header.tsx (บรรทัด ~20-30)

# 3. เพิ่ม link ใน Footer.tsx  
src/components/Footer.tsx (บรรทัด ~6-12)
```

### 🧩 การเพิ่ม Component ใหม่
```bash
# สร้างไฟล์ใน
src/components/[ComponentName].tsx

# Import ในหน้าที่ต้องการ
import ComponentName from '@/components/ComponentName';
```

## 🎨 การแก้ไข Styling

### 🌈 สี (Colors)
- Primary: `bg-blue-600`, `text-blue-600`
- Dark mode: `dark:bg-gray-900`, `dark:text-white`

### 📱 Responsive Design
- Mobile: `sm:` (640px+)
- Tablet: `md:` (768px+)  
- Desktop: `lg:` (1024px+)

## 📊 การเพิ่มข้อมูล

### 🏗️ โครงการใหม่ (Portfolio)
แก้ไขไฟล์: `src/app/portfolio/page.tsx`
```typescript
const projects = [
  // เพิ่มโครงการใหม่ที่นี่
  {
    id: X,
    title: 'ชื่อโครงการ',
    description: 'รายละเอียด...',
    category: 'ประเภท',
    year: '2024',
    client: 'ลูกค้า',
    features: ['ฟีเจอร์1', 'ฟีเจอร์2'],
    icon: IconName,
  }
];
```

### 🛠️ บริการใหม่ (Services)
แก้ไขไฟล์: `src/app/services/page.tsx`
```typescript
const services = [
  // เพิ่มบริการใหม่ที่นี่
  {
    name: 'ชื่อบริการ',
    description: 'รายละเอียด...',
    features: ['ฟีเจอร์1', 'ฟีเจอร์2'],
    icon: IconName,
    pricing: 'ราคา',
  }
];
```

## 🔧 การ Deploy

### 📤 ขั้นตอนการ Deploy
```bash
1. git add .
2. git commit -m "feat: เพิ่ม[สิ่งที่เพิ่ม]"
3. git push
4. รอ Vercel deploy อัตโนมัติ (2-3 นาที)
```

### ⚠️ หลีกเลี่ยง Common Errors
- ✅ ลบ imports ที่ไม่ใช้
- ✅ ใช้ TypeScript types แทน `any`
- ✅ เช็คสะกดคำใน content
- ✅ ทดสอบ responsive design

## 📞 การแก้ไขข้อมูลติดต่อ

### 📧 Contact Page
แก้ไขไฟล์: `src/app/contact/page.tsx`
- เปลี่ยนเบอร์โทร, อีเมล, ที่อยู่
- แก้ไข Google Maps embed (ถ้ามี)

### 📱 Social Links  
แก้ไขไฟล์: `src/components/Footer.tsx`
- เปลี่ยน href ใน navigation.social

## 🎯 ฟีเจอร์ที่อาจเพิ่มในอนาคต

### 🌟 Level 1 (ง่าย)
- [ ] เพิ่มรูปภาพจริงแทน placeholder
- [ ] เพิ่มโครงการใหม่ๆ 
- [ ] แก้ไขข้อมูลบริษัท/ข้อมูลติดต่อ
- [ ] เพิ่ม testimonials/รีวิวลูกค้า

### 🚀 Level 2 (ปานกลาง)
- [ ] ระบบ contact form ที่ส่งอีเมลได้จริง
- [ ] Blog/ข่าวสาร page
- [ ] ระบบค้นหาโครงการ/บริการ
- [ ] Multi-language support (EN/TH)

### 🎖️ Level 3 (ยาก)  
- [ ] ระบบ admin panel
- [ ] ฐานข้อมูล (database integration)
- [ ] ระบบ authentication
- [ ] Real-time chat support

## 📚 Resources สำหรับการพัฒนา

### 🎨 Design
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/) - สำหรับ icons

### ⚛️ Framework
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)

### 🚀 Deployment
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Docs](https://docs.github.com/)

## 🐛 Troubleshooting

### 📋 หากเจอปัญหา Build Failed
1. เช็ค errors ใน Vercel dashboard
2. ลบ unused imports/variables
3. ตรวจสอบ TypeScript types
4. Push โค้ดใหม่

### 🔄 หากต้องการย้อนกลับ
```bash
git log --oneline           # ดู commit history
git revert [commit-hash]    # ย้อนกลับการเปลี่ยนแปลง
git push                    # deploy ใหม่
```

---

**💡 Tips: เก็บไฟล์นี้ไว้และอัพเดทเมื่อมีการเปลี่ยนแปลงใหม่ๆ!** 