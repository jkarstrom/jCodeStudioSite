/* eslint-disable react/prop-types */
import React from "react";
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
  title: "jCode Studio",
  description: "jCode studio, a frontend developer looking to create your next project - created by Joan Karstrom",
  icons: {
    icon: './logos/Favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden w-screen h-full">
      <body className={`${beVietnamPro.variable} font-vietnam h-full`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
