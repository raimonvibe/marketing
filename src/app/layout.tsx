import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f5f9" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SaaS Marketing Playbook 2026 | Marketing Quest",
    template: "%s | Marketing Quest",
  },
  description:
    "Free tutorials and playbooks for indie founders — sell SaaS, web apps, and digital tools with story-first marketing. No VC needed.",
  keywords: [
    "SaaS marketing",
    "sell digital products",
    "indie founders",
    "MRR",
    "startup marketing",
    "conversion copy",
  ],
  authors: [{ name: "Marketing Quest" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Marketing Quest",
    title: "SaaS Marketing Playbook 2026",
    description:
      "Level up your SaaS sales in seven days — narrative quests, free playbooks, and newsletter adventures for indie builders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Marketing Playbook 2026 | Marketing Quest",
    description:
      "Story-first marketing tutorials for founders selling software — join the adventure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
