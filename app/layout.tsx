import Head from 'next/head';
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "AI Kavach",
  description: "Mental Health by Kavach AI",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="./logo.png" />
        <meta property="og:image:alt" content="Kavach Mental Health App Logo" />
        <meta name="twitter:image" content="./logo.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
