/* eslint-disable react/prop-types */
import React from "react";
import Script from "next/script";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  variable: '--font-be-vietnam',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: "jCode Studio LLC™ | Built to feel. Designed to last.",
  description: "jCode Studio LLC™ — Joan Karstrom's creative development studio. Frontend development and UX design that puts craft first, from concept to launch.",
  keywords: ["frontend developer", "UX designer", "React developer", "Next.js", "web development", "Joan Karstrom", "jCode Studio", "UI design", "brand identity"],
  icons: {
    icon: './logos/Favicon.svg',
  },
  openGraph: {
    title: "jCode Studio LLC™ | Built to feel. Designed to last.",
    description: "jCode Studio LLC™ — Frontend development and UX design that puts craft first. Explore web projects, apps, and the studio's creative process.",
    url: "https://www.jcodestudio.com",
    siteName: "jCode Studio",
    images: [
      {
        url: "/logos/jCode Logo- Blue.png",
        width: 1200,
        height: 630,
        alt: "jCode Studio preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className={`${beVietnamPro.variable} font-vietnam flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow w-full relative">
          {children}
        </main>
        <Footer />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GN7EY0CTJY"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GN7EY0CTJY');
          `}
        </Script>
      </body>
    </html>
  );
}
