import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "Viking Hacks";
let description = "Join us for the first hackathon hosted at Irvington High School";
let ogimage = "https://cloud-n7euqf935-hack-club-bot.vercel.app/0vikinghackswebsitebg.png";
let sitename = "vikinghacks.com";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/vikingwhitelogo.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https:vikinghacks.vercel.app",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17181C] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
