"use client";
import ClientProviders from './ClientProviders';

export default function BusinessLayout({ children }) {
  return (
    <html>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}