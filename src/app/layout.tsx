import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — Portfolio`,
  description: personalInfo.metaDescription,
  authors: [{ name: personalInfo.name }],
  keywords: [
    "Computer Vision",
    "Machine Learning",
    "AI",
    "Software Engineering",
    "UT Arlington",
    "Portfolio",
  ],
  openGraph: {
    title: `${personalInfo.name} — Portfolio`,
    description: personalInfo.metaDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Portfolio`,
    description: personalInfo.metaDescription,
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
