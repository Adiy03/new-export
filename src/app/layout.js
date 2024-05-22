import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import Head from 'next/head';

const karla = Karla({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: "EasyExportID | Indonesia Wholesale Trade",
  description: "EasyExportID.site is an export company based in Indonesia, specializing in global wholesale trade",
  icons: {
    icon: "https://easyexportid.site/logo.jpg",
    apple: "https://easyexportid.site/logo.jpg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="hCEO0-UprO6Pt_XkGN93_xSz4QMzGyu_wzCzfBlUZbQ" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-72TG333Z14"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-72TG333Z14');
            `,
          }}
        />
      </Head>
      <body className={karla.className}>
        <Navbar />
        {children}
        <Whatsapp />
      </body>
    </html>
  );
}
