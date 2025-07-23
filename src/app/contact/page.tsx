'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    name: 'โทรศัพท์',
    details: '+66 2-xxx-xxxx',
    icon: PhoneIcon,
  },
  {
    name: 'อีเมล',
    details: 'info@electrical-portfolio.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'ที่อยู่',
    details: '123 ถนนพระราม 4 แขวงสีลม เขตบางรัก กรุงเทพฯ 10500',
    icon: MapPinIcon,
  },
  {
    name: 'เวลาทำการ',
    details: 'จันทร์-ศุกร์ 8:00-17:00 น.',
    icon: ClockIcon,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('ขอบคุณสำหรับการติดต่อ! เราจะติดต่อกลับในเร็วๆ นี้');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <div className="bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              ติดต่อเรา
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              พร้อมให้คำปรึกษาและรับใบเสนอราคาฟรี สำหรับทุกโครงการด้านวิศวกรรมไฟฟ้า
              ติดต่อเราได้ทุกวันผ่านช่องทางที่สะดวกสำหรับคุณ
            </p>
          </div>
        </div>

        {/* Contact information */}
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                ข้อมูลการติดต่อ
              </h2>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {contactInfo.map((item) => (
                <div key={item.name} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                  <dt className="flex items-center gap-x-3 font-semibold text-gray-900 dark:text-white">
                    <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    {item.name}
                  </dt>
                  <dd className="mt-4 text-gray-600 dark:text-gray-300">{item.details}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                ส่งข้อความถึงเรา
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                กรอกแบบฟอร์มด้านล่างเพื่อขอคำปรึกษาหรือใบเสนอราคา เราจะติดต่อกลับภายใน 24 ชั่วโมง
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    ชื่อ-นามสกุล *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    ชื่อบริษัท/องค์กร
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    อีเมล *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    เบอร์โทรศัพท์
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    บริการที่สนใจ
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600"
                    >
                      <option value="">เลือกบริการ</option>
                      <option value="industrial">ระบบไฟฟ้าอุตสาหกรรม</option>
                      <option value="automation">ระบบควบคุมอัตโนมัติ</option>
                      <option value="building">ระบบไฟฟ้าอาคาร</option>
                      <option value="renewable">ระบบพลังงานทดแทน</option>
                      <option value="maintenance">ตรวจสอบและบำรุงรักษา</option>
                      <option value="consulting">การฝึกอบรมและปรึกษา</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    รายละเอียดโครงการ *
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  ส่งข้อความ
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map section (placeholder) */}
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                ที่ตั้งสำนักงาน
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="aspect-video w-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                  <p className="mt-4 text-gray-500 dark:text-gray-400">แผนที่จะแสดงที่นี่</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
} 