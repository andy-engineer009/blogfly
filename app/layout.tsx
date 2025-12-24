import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

const redditSans = Reddit_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-reddit-sans",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Blogfly · Blogging Platform",
  description:
    "A resale-ready blog platform with centralized theming and a private admin surface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redditSans.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
        style={{ fontFamily: "var(--font-reddit-sans), sans-serif" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
