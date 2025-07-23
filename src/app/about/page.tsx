import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AcademicCapIcon, BoltIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'ปีประสบการณ์', value: '10+' },
  { id: 2, name: 'โครงการที่เสร็จสิ้น', value: '150+' },
  { id: 3, name: 'ลูกค้าที่ไว้วางใจ', value: '80+' },
  { id: 4, name: 'ใบรับรองมาตรฐาน', value: '5' },
];

const qualifications = [
  {
    name: 'ใบอนุญาตประกอบวิชาชีพวิศวกรรมไฟฟ้า',
    description: 'ได้รับการรับรองจากสภาวิศวกร',
    icon: AcademicCapIcon,
  },
  {
    name: 'มาตรฐานความปลอดภัย',
    description: 'เฉพาะทางด้านระบบไฟฟ้าแรงสูง',
    icon: BoltIcon,
  },
  {
    name: 'การบริการตลอด 24 ชั่วโมง',
    description: 'พร้อมให้คำปรึกษาและบริการฉุกเฉิน',
    icon: ClockIcon,
  },
  {
    name: 'ทีมงานผู้เชี่ยวชาญ',
    description: 'วิศวกรที่มีประสบการณ์สูงในแต่ละสาขา',
    icon: UsersIcon,
  },
];

export default function About() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              เกี่ยวกับเรา
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
              ผู้เชี่ยวชาญด้านวิศวกรรมไฟฟ้าที่มีประสบการณ์มากกว่า 10 ปี 
              ในการออกแบบและติดตั้งระบบไฟฟ้าสำหรับภาคอุตสาหกรรมและพาณิชยกรรม
            </p>
          </div>
        </div>

        {/* About content */}
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                ประสบการณ์และความเชี่ยวชาญ
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                เราเป็นทีมวิศวกรไฟฟ้าที่มีประสบการณ์หลากหลายสาขา ตั้งแต่ระบบไฟฟ้าอุตสาหกรรม 
                ระบบควบคุมอัตโนมัติ ไปจนถึงระบบพลังงานทดแทน เรามุ่งมั่นที่จะส่งมอบงานคุณภาพสูง
                ที่ตอบสนองความต้องการของลูกค้าอย่างครบถ้วน
              </p>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                <p className="flex-none text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  250M+
                </p>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                  บาท มูลค่าโครงการที่ดำเนินการสำเร็จ
                </p>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 dark:bg-gray-700 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">
                  99.8%
                </p>
                <p className="text-sm leading-6 text-gray-400">
                  อัตราความสำเร็จของโครงการ
                </p>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-blue-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">
                  24/7
                </p>
                <p className="text-sm leading-6 text-blue-200">
                  บริการหลังการขายและซ่อมบำรุง
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600 dark:text-gray-300">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Qualifications section */}
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">คุณสมบัติ</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                ใบรับรองและมาตรฐาน
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                เรามีใบรับรองและมาตรฐานที่จำเป็นสำหรับการให้บริการด้านวิศวกรรมไฟฟ้าอย่างครบถ้วน
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {qualifications.map((qualification) => (
                  <div key={qualification.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <qualification.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {qualification.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {qualification.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
} 