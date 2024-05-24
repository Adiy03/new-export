import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import Head from 'next/head';
import GoogleAnalytics from "./GoogleAnalytics";

const karla = Karla({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "EasyExportID | Indonesia Wholesale Trade",
  icons: {
    icon: "https://easyexportid.site/logo.jpg",
    apple: "https://easyexportid.site/logo.jpg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
      <GoogleAnalytics />
        <Navbar />
        {children}
        <Whatsapp />
      </body>
    </html>
  );
}
