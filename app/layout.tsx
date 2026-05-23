import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "TatweerX | Software Engineer & Digital Solutions",

  description:
    "Modern software engineering portfolio showcasing scalable web applications, POS systems, UI/UX experiences, and premium digital products.",

  keywords: [
    "TatweerX",
    "Software Engineer",
    "Next.js",
    "React Developer",
    "POS Systems",
    "UI UX",
    "Web Development",
    "Frontend Developer",
  ],

  authors: [
    {
      name: "Musab Eisa",
    },
  ],

  creator: "Musab Eisa",

  openGraph: {
    title: "TatweerX",

    description:
      "Premium software engineering portfolio and digital solutions platform.",

    url: "https://tatweerx.com",

    siteName: "TatweerX",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "TatweerX",

    description:
      "Premium software engineering portfolio and digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}