import "./globals.css";
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: "Conexão Brigada",
};

const font = Montserrat({
  weight: ['500'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
