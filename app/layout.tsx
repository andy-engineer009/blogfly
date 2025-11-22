import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "Blogfly · Admin-controlled storytelling",
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
        className={`${poppins.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
