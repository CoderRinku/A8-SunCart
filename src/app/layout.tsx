import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SunCart - Summer Essentials Store",
  description: "A modern summer eCommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} flex flex-col min-h-screen bg-base-100 text-base-content`}>
        {/* Amader Toiri Kora Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        {/* Amader Toiri Kora Footer */}
        <Footer />
      </body>
    </html>
  );
}