import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Electrical Engineering Portfolio - ผลงานวิศวกรรมไฟฟ้า",
    template: "%s | Electrical Engineering Portfolio"
  },
  description: "Professional electrical engineering portfolio showcasing projects, products, and services in electrical systems, power distribution, and automation.",
  keywords: ["electrical engineering", "วิศวกรรมไฟฟ้า", "portfolio", "ระบบไฟฟ้า", "electrical systems", "power distribution", "automation"],
  authors: [{ name: "Electrical Engineer" }],
  creator: "Professional Electrical Engineer",
  publisher: "Electrical Engineering Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
    url: "https://your-domain.com",
    siteName: "Electrical Engineering Portfolio",
    title: "Professional Electrical Engineering Portfolio",
    description: "Showcasing professional electrical engineering projects, products, and services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Electrical Engineering Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Engineering Portfolio",
    description: "Professional electrical engineering projects and services",
    images: ["/og-image.jpg"]
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
