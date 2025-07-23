import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LightBulbIcon, CogIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

// 📊 PORTFOLIO DATA - อัพเดทข้อมูลโครงการจริงที่นี่
// *** เพิ่มโครงการใหม่: copy format ด้านล่างแล้วเปลี่ยนข้อมูล ***
const projects = [
  {
    id: 1,
    title: 'ระบบไฟฟ้าโรงงานผลิตชิ้นส่วนยานยนต์',
    description: 'ออกแบบและติดตั้งระบบไฟฟ้าสำหรับโรงงานผลิตชิ้นส่วนยานยนต์ขนาดใหญ่ รองรับกำลังไฟฟ้า 2.5 MW พร้อมระบบสำรองไฟฟ้าและระบบป้องกันไฟฟ้าลัดวงจร',
    category: 'Industrial',
    year: '2024',
    client: 'บริษัท ผลิตชิ้นส่วนยานยนต์ จำกัด',
    features: ['ระบบไฟฟ้าแรงสูง 22 kV', 'หม้อแปลง 2.5 MVA', 'ระบบสำรองไฟฟ้า UPS', 'ระบบป้องกันฟ้าผ่า'],
    icon: CogIcon,
  },
  {
    id: 2,
    title: 'ระบบควบคุม PLC สายการผลิต',
    description: 'พัฒนาระบบควบคุมอัตโนมัติด้วย PLC Siemens S7-1500 สำหรับสายการผลิตเครื่องดื่ม รองรับการผลิต 10,000 ขวดต่อชั่วโมง พร้อม HMI และระบบ SCADA',
    category: 'Automation',
    year: '2024',
    client: 'โรงงานผลิตเครื่องดื่ม',
    features: ['PLC Siemens S7-1500', 'HMI Touchscreen 15"', 'ระบบ SCADA', 'Variable Frequency Drive'],
    icon: CogIcon,
  },
  {
    id: 3,
    title: 'ระบบไฟฟ้าอาคารสำนักงาน 20 ชั้น',
    description: 'ออกแบบระบบไฟฟ้าและแสงสว่างสำหรับอาคารสำนักงาน 20 ชั้น ติดตั้งระบบ LED ประหยัดพลังงาน ระบบ Building Management System และระบบไฟฟ้าฉุกเฉิน',
    category: 'Building',
    year: '2023',
    client: 'บริษัท พัฒนาอสังหาริมทรัพย์',
    features: ['ระบบแสงสว่าง LED', 'Building Management System', 'ระบบไฟฟ้าฉุกเฉิน', 'ระบบรักษาความปลอดภัย'],
    icon: BuildingOfficeIcon,
  },
  {
    id: 4,
    title: 'โซลาร์ฟาร์ม 5 MW',
    description: 'ออกแบบและติดตั้งโซลาร์ฟาร์มขนาด 5 MW พร้อมระบบ Grid-tie Inverter และระบบ Monitoring รองรับการผลิตไฟฟ้าขายให้กับการไฟฟ้าฝ่ายผลิต',
    category: 'Renewable Energy',
    year: '2023',
    client: 'บริษัท พลังงานทดแทน',
    features: ['Solar Panel 5 MW', 'Grid-tie Inverter', 'Monitoring System', 'SCADA Integration'],
    icon: LightBulbIcon,
  },
  {
    id: 5,
    title: 'ระบบไฟฟ้าโรงพยาบาล',
    description: 'ออกแบบระบบไฟฟ้าเฉพาะทางสำหรับโรงพยาบาล รวมถึงระบบไฟฟ้าสำรอง ระบบ Isolated Power และระบบไฟฟ้าหอผู้ป่วย',
    category: 'Healthcare',
    year: '2023',
    client: 'โรงพยาบาลเอกชน',
    features: ['UPS Medical Grade', 'Isolated Power System', 'Emergency Lighting', 'Nurse Call System'],
    icon: BuildingOfficeIcon,
  },
  {
    id: 6,
    title: 'ระบบควบคุมการผลิตปูนซีเมนต์',
    description: 'พัฒนาระบบควบคุมอัตโนมัติสำหรับกระบวนการผลิตปูนซีเมนต์ ควบคุมอุณหภูมิ ความดัน และการหมุนเวียนของวัตถุดิบ',
    category: 'Industrial',
    year: '2022',
    client: 'บริษัท ผลิตปูนซีเมนต์',
    features: ['Temperature Control', 'Pressure Monitoring', 'Material Flow Control', 'Quality Control System'],
    icon: CogIcon,
  },
];

export default function Portfolio() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <div className="bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              ผลงานของเรา
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              ตัวอย่างโครงการด้านวิศวกรรมไฟฟ้าที่เราได้ทำงานร่วมกับลูกค้าต่างๆ 
              ทั้งในภาคอุตสาหกรรม พาณิชยกรรม และที่อยู่อาศัย
            </p>
          </div>
        </div>

        {/* Projects section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                โครงการที่ผ่านมา
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                รวมผลงานคุณภาพสูงที่ได้รับการยอมรับจากลูกค้า
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
              {projects.map((project) => (
                <article key={project.id} className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
                  <div className="flex items-start gap-x-8">
                    <div className="flex-none rounded-2xl bg-blue-600 p-4">
                      <project.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-x-4 text-xs">
                        <span className="text-gray-500 dark:text-gray-400">{project.year}</span>
                        <span className="relative z-10 rounded-full bg-blue-50 dark:bg-blue-900/50 px-3 py-1.5 font-medium text-blue-600 dark:text-blue-400">
                          {project.category}
                        </span>
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">ลูกค้า:</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{project.client}</p>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">ฟีเจอร์หลัก:</h4>
                        <ul className="mt-2 grid grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-blue-600">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                สนใจในการทำงานร่วมกับเรา?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
                เรายินดีให้คำปรึกษาและประเมินโครงการของคุณฟรี
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ติดต่อเรา
                </a>
                <a href="/services" className="text-sm font-semibold leading-6 text-white">
                  ดูบริการ <span aria-hidden="true">→</span>
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