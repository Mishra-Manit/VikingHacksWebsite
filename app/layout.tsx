import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "Viking Hacks";
let description = "Join us for the first hackathon hosted at Irvington High School";
let ogimage = `https://vikinghacks.com/og?title=${"02/15/25"}`;
let sitename = "vikinghacks.com";

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  metadataBase: new URL('http://vikinghacks.com'),
  title: title,
  description: description,
  icons: {
    icon: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://vikinghacks.com",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

const cx = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(
			GeistSans.variable,
			GeistMono.variable
		)}>
      <body className="text-white bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
