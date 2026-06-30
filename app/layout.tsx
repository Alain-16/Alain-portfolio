import type { Metadata } from "next";
import localFont from "next/font/local"; // default import, not { ... }
import "./globals.css";

const outfit = localFont({
  variable: "--font-outfit",
  display: "swap", // show fallback text immediately, swap when font loads
  src: [
    {
      path: "./fonts/outfit-v15-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/outfit-v15-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/outfit-v15-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/outfit-v15-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/outfit-v15-latin-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

const jetbrainsMono = localFont({
  variable: "--font-jetbrains",
  display: "swap",
  src: [
    {
      path: "./fonts/jetbrains-mono-v24-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/jetbrains-mono-v24-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/jetbrains-mono-v24-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Alain Mugisha — Full-Stack Developer",
  description:
    "Full-stack developer building mission-critical platforms for governments and healthcare providers at national scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
