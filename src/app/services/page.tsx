import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CogIcon, 
  LightBulbIcon, 
  WrenchScrewdriverIcon, 
  BuildingOfficeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'ออกแบบระบบไฟฟ้าอุตสาหกรรม',
    description: 'ออกแบบระบบไฟฟ้าสำหรับโรงงานอุตสาหกรรม รวมถึงระบบแรงสูง แรงต่ำ และระบบป้องกัน',
    features: [
      'ระบบไฟฟ้าแรงสูง (6.6kV - 22kV)',
      'ระบบไฟฟ้าแรงต่ำ (380V - 415V)',
      'ระบบป้องกันไฟฟ้าลัดวงจร',
      'ระบบสำรองไฟฟ้า UPS/Generator'
    ],
    icon: CogIcon,
    pricing: 'เริ่มต้น 150,000 บาท',
  },
  {
    name: 'ระบบควบคุมอัตโนมัติ (PLC/SCADA)',
    description: 'พัฒนาระบบควบคุมอัตโนมัติด้วย PLC, HMI และ SCADA สำหรับการผลิตอุตสาหกรรม',
    features: [
      'โปรแกรม PLC (Siemens, Allen Bradley)',
      'ออกแบบ HMI Touchscreen',
      'ระบบ SCADA และ Database',
      'Variable Frequency Drive (VFD)'
    ],
    icon: WrenchScrewdriverIcon,
    pricing: 'เริ่มต้น 200,000 บาท',
  },
  {
    name: 'ระบบไฟฟ้าอาคาร',
    description: 'ออกแบบระบบไฟฟ้าสำหรับอาคารสำนักงาน โรงแรม และอาคารพาณิชย์',
    features: [
      'ระบบแสงสว่าง LED ประหยัดพลังงาน',
      'Building Management System (BMS)',
      'ระบบไฟฟ้าฉุกเฉิน',
      'ระบบรักษาความปลอดภัย'
    ],
    icon: BuildingOfficeIcon,
    pricing: 'เริ่มต้น 100,000 บาท',
  },
  {
    name: 'ระบบพลังงานทดแทน',
    description: 'ออกแบบและติดตั้งระบบโซลาร์เซลล์และระบบพลังงานทดแทนอื่นๆ',
    features: [
      'Solar PV System (Grid-tie/Off-grid)',
      'Battery Energy Storage System',
      'Monitoring และ Analytics',
      'Energy Management System'
    ],
    icon: LightBulbIcon,
    pricing: 'เริ่มต้น 250,000 บาท',
  },
  {
    name: 'ตรวจสอบและบำรุงรักษา',
    description: 'บริการตรวจสอบ ทดสอบ และบำรุงรักษาระบบไฟฟ้าตามมาตรฐาน',
    features: [
      'Electrical Safety Audit',
      'Thermography Testing',
      'Power Quality Analysis',
      'Preventive Maintenance'
    ],
    icon: ShieldCheckIcon,
    pricing: 'เริ่มต้น 25,000 บาท',
  },
  {
    name: 'การฝึกอบรมและปรึกษา',
    description: 'บริการฝึกอบรมบุคลากรและให้คำปรึกษาด้านระบบไฟฟ้า',
    features: [
      'Electrical Safety Training',
      'PLC Programming Course',
      'Technical Consultation',
      'Project Management'
    ],
    icon: ChartBarIcon,
    pricing: 'เริ่มต้น 15,000 บาท',
  },
];

const processSteps = [
  {
    id: 1,
    name: 'ปรึกษาและสำรวจ',
    description: 'ปรึกษาความต้องการและสำรวจพื้นที่โครงการ',
    icon: ClockIcon,
  },
  {
    id: 2,
    name: 'ออกแบบและประเมิน',
    description: 'ออกแบบระบบและประเมินราคาโครงการ',
    icon: CogIcon,
  },
  {
    id: 3,
    name: 'ติดตั้งและทดสอบ',
    description: 'ติดตั้งระบบและทดสอบการทำงาน',
    icon: WrenchScrewdriverIcon,
  },
  {
    id: 4,
    name: 'ส่งมอบและบำรุงรักษา',
    description: 'ส่งมอบโครงการและให้บริการหลังการขาย',
    icon: ShieldCheckIcon,
  },
];

export default function Services() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <div className="bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              บริการของเรา
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              เรามีบริการครบวงจรด้านวิศวกรรมไฟฟ้า ตั้งแต่การออกแบบ ติดตั้งไปจนถึงการบำรุงรักษา
              พร้อมทีมผู้เชี่ยวชาญที่มีประสบการณ์มากกว่า 10 ปี
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">บริการหลัก</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                ความเชี่ยวชาญที่ครอบคลุม
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {services.map((service) => (
                <div key={service.name} className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                  <div className="flex items-center gap-x-4">
                    <div className="rounded-lg bg-blue-600 p-2">
                      <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {service.pricing}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process section */}
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">ขั้นตอนการทำงาน</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                กระบวนการที่เป็นมาตรฐาน
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                เรามีขั้นตอนการทำงานที่ชัดเจนเพื่อให้โครงการเสร็จสิ้นตามกำหนดเวลาและคุณภาพที่ตกลง
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {processSteps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-blue-600 p-4 text-white">
                      <step.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <dt className="mt-4 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      {step.id}. {step.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {step.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-blue-600">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                พร้อมเริ่มโครงการแล้วหรือยัง?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
                ติดต่อเราเพื่อขอคำปรึกษาฟรีและรับใบเสนอราคาโครงการของคุณ
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ขอใบเสนอราคา
                </a>
                <a href="tel:+66-2-xxx-xxxx" className="text-sm font-semibold leading-6 text-white">
                  โทร 02-xxx-xxxx <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
} 