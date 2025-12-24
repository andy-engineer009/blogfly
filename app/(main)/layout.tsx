"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="w-[90%] mx-auto md:min-w-[180px] md:max-w-[1280px] 2xl:max-w-[1536px]">
        {children}
      </div>
      <Footer />
    </>
  );
}

