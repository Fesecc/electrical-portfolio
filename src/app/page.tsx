import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRightIcon, LightBulbIcon, CogIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'ระบบไฟฟ้าอุตสาหกรรม',
    description: 'ออกแบบและติดตั้งระบบไฟฟ้าสำหรับโรงงานอุตสาหกรรม',
    icon: CogIcon,
  },
  {
    name: 'ระบบควบคุมอัตโนมัติ',
    description: 'พัฒนาระบบ PLC และ SCADA สำหรับการควบคุมอุตสาหกรรม',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'ระบบไฟฟ้าแสงสว่าง',
    description: 'ออกแบบระบบแสงสว่างที่ประหยัดพลังงาน',
    icon: LightBulbIcon,
  },
];

const projects = [
  {
    id: 1,
    title: 'ระบบไฟฟ้าโรงงานผลิต',
    description: 'ออกแบบและติดตั้งระบบไฟฟ้าสำหรับโรงงานผลิตชิ้นส่วนยานยนต์',
    imageUrl: '/placeholder-project1.jpg',
    category: 'Industrial',
  },
  {
    id: 2,
    title: 'ระบบควบคุม PLC',
    description: 'พัฒนาระบบควบคุมสายการผลิตด้วย PLC Siemens',
    imageUrl: '/placeholder-project2.jpg',
    category: 'Automation',
  },
  {
    id: 3,
    title: 'ระบบไฟฟ้าอาคาร',
    description: 'ออกแบบระบบไฟฟ้าและแสงสว่างสำหรับอาคารสำนักงาน',
    imageUrl: '/placeholder-project3.jpg',
    category: 'Building',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                วิศวกรรมไฟฟ้า
                <span className="text-blue-600 dark:text-blue-400"> มืออาชีพ</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                ผู้เชี่ยวชาญด้านระบบไฟฟ้าอุตสาหกรรม ระบบควบคุมอัตโนมัติ และโซลูชันด้านพลังงาน 
                พร้อมให้บริการออกแบบ ติดตั้ง และบำรุงรักษาระบบไฟฟ้าครบวงจร
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/portfolio"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  ดูผลงาน
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  ติดต่อเรา <ArrowRightIcon className="inline h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">บริการของเรา</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                ความเชี่ยวชาญที่หลากหลาย
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                เรามีประสบการณ์ในการทำงานกับระบบไฟฟ้าหลากหลายประเภท 
                ตั้งแต่ระบบอุตสาหกรรมขนาดใหญ่ไปจนถึงระบบควบคุมที่ซับซ้อน
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Featured projects */}
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                ผลงานที่น่าภาคภูมิใจ
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                ตัวอย่างโครงการที่เราได้ทำงานร่วมกับลูกค้าต่างๆ
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.id} className="flex flex-col items-start">
                  <div className="relative w-full">
                    <div className="aspect-video w-full rounded-2xl bg-gray-100 dark:bg-gray-700 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                      <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500">
                        <LightBulbIcon className="h-12 w-12" />
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <span className="relative z-10 rounded-full bg-blue-50 dark:bg-blue-900/50 px-3 py-1.5 font-medium text-blue-600 dark:text-blue-400">
                        {project.category}
                      </span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        <Link href={`/portfolio`}>
                          <span className="absolute inset-0" />
                          {project.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link
                href="/portfolio"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                ดูผลงานทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
