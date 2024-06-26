import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import AppContextProvider from "@/context/app-context";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Endurance Vault",
  description:
    "Strava athlete could buy boosters with collectible cards and expand his collection by logging more running/cycling activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="bg-[#f8e7d0] absolute top-[-6rem] -z-10 right-[11rem] h-[90.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#d6fff7] absolute top-[-6rem] -z-10 left-[-35rem] h-[90.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
          <AppContextProvider>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-8">{children}</main>
            {/* <Footer /> */}
          </AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
