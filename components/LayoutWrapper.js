'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isBusinessRoute = pathname.startsWith('/business');

  return (
    <>
      {!isBusinessRoute && <Navbar />}
      {children}
      {!isBusinessRoute && <Footer />}
    </>
  );
}