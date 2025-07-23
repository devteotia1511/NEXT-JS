import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import LayoutWrapper from "@/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Tutorial",
  description: "Generated For Learning Experience",
};

const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
const isBusinessRoute = pathname.startsWith('/business');

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LayoutWrapper>
          <div className="container mx-auto min-h-[78vh]">
            {children}
          </div>
        </LayoutWrapper>
      </body>
    </html>
  );
}
