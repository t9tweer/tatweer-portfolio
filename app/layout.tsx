import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TatweerX | Modern Developer Portfolio",

  description:
    "Modern portfolio showcasing scalable systems and premium UI/UX experiences.",

  metadataBase: new URL("https://tatweer-portfolio.vercel.app"),

  openGraph: {
    title: "TatweerX | Modern Developer Portfolio",

    description:
      "Premium portfolio showcasing modern web development and digital experiences.",

    url: "https://tatweer-portfolio.vercel.app",

    siteName: "TatweerX",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TatweerX Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "TatweerX",

    description:
      "Modern developer portfolio with cinematic UI and scalable systems.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}