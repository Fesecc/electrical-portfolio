import Link from 'next/link';

const navigation = {
  main: [
    { name: 'หน้าแรก', href: '/' },
    { name: 'เกี่ยวกับเรา', href: '/about' },
    { name: 'ผลงาน', href: '/portfolio' },
    { name: 'บริการ', href: '/services' },
    { name: 'ติดต่อ', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.017.388a6.5 6.5 0 00-2.357 1.533A6.5 6.5 0 00.388 5.017C.204 5.52.082 6.094.048 7.041.013 7.989 0 8.396 0 12.017s.013 4.028.048 4.976c.034.947.156 1.521.34 2.024a6.5 6.5 0 001.533 2.357 6.5 6.5 0 002.357 1.533c.503.184 1.077.306 2.024.34.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.024-.34a6.5 6.5 0 002.357-1.533 6.5 6.5 0 001.533-2.357c.184-.503.306-1.077.34-2.024.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.34-2.024a6.5 6.5 0 00-1.533-2.357A6.5 6.5 0 0018.983.388C18.48.204 17.906.082 16.959.048 16.011.013 15.604 0 12.017 0zm0 2.16c3.548 0 3.976.013 5.381.048.85.034 1.316.158 1.625.263.408.158.7.348 1.006.654.306.306.496.598.654 1.006.105.309.229.775.263 1.625.035 1.405.048 1.833.048 5.381s-.013 3.976-.048 5.381c-.034.85-.158 1.316-.263 1.625-.158.408-.348.7-.654 1.006a2.7 2.7 0 01-1.006.654c-.309.105-.775.229-1.625.263-1.405.035-1.833.048-5.381.048s-3.976-.013-5.381-.048c-.85-.034-1.316-.158-1.625-.263a2.7 2.7 0 01-1.006-.654 2.7 2.7 0 01-.654-1.006c-.105-.309-.229-.775-.263-1.625-.035-1.405-.048-1.833-.048-5.381s.013-3.976.048-5.381c.034-.85.158-1.316.263-1.625.158-.408.348-.7.654-1.006a2.7 2.7 0 011.006-.654c.309-.105.775-.229 1.625-.263 1.405-.035 1.833-.048 5.381-.048zm0 3.676a6.164 6.164 0 100 12.328 6.164 6.164 0 000-12.328zm0 10.168a4.004 4.004 0 110-8.008 4.004 4.004 0 010 8.008zM19.846 5.68a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link 
                href={item.href} 
                className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
          &copy; 2025 Electrical Engineering Portfolio. สงวนลิขสิทธิ์.
        </p>
      </div>
    </footer>
  );
} 