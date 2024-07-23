import { ClerkProvider } from '@clerk/nextjs'
import { shadesOfPurple, dark, neobrutalism } from '@clerk/themes';
import Head from 'next/head';
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "ATZ AI Solutions",
  description: "Astra Techz Customises & Deploys AI Solutions",
};



export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
      signIn: { baseTheme: dark },
      signUp: { baseTheme: dark },
    }}
    >
    <html lang="en" className={GeistSans.variable}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="./logo.png" />
        <meta property="og:image:alt" content="ATZ AI Solutions" />
        <meta name="twitter:image" content="./logo.png" />
      </Head>
      <body>{children}</body>
    </html>
    </ClerkProvider>
  );
}
