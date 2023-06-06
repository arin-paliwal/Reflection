import './globals.css'
import Head from 'next/head';
import { Archivo } from 'next/font/google'
const archivo = Archivo({ subsets: ['latin'] })
export const metadata = {
  title: "Reflection",
  description: "Curated Blogs for Curious Minds.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  )
}
