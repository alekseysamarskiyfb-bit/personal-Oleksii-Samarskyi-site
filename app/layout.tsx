import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://oleksii-samarskyi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Samarskyi Oleksii — Co-founder, Creako Labs",
  description:
    "Co-founder of Creako Labs. Building and growing digital products through brand, design and growth.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Samarskyi Oleksii — Co-founder, Creako Labs",
    description:
      "Co-founder of Creako Labs. Building and growing digital products through brand, design and growth.",
    url: siteUrl,
    siteName: "Oleksii Samarskyi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oleksii Samarskyi — Co-founder, Creako Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samarskyi Oleksii — Co-founder, Creako Labs",
    description:
      "Co-founder of Creako Labs. Building and growing digital products through brand, design and growth.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
