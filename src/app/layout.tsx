import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "@/containers/providers";
import ThemeSwitch from "@/components/theme-controller";
import Navbar from "@/components/navbar";
import Custom404 from "../../custom404";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Frontend | Advance",
  description: "Frontend Advance Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950
        relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 antialiased`}
      >
        <Providers>
          {/* Gradient Background Color */}
          <div
            className="bg-[#bc9899] absolute top-[-6rem] flex-1 -z-[10] right-[11rem]
         h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
          ></div>

          <div
            className="bg-[#a9a4cc] absolute top-[-1rem] -z-[10] flex-1 left-[-35rem] h-[31.25rem]
          w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg-:left-[-28rem] 
          xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
          ></div>
          <Navbar />
          {children}
          <ThemeSwitch />
        </Providers>
        <Custom404/>
      </body>
    </html>
  );
}
