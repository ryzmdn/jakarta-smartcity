import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import { cn } from "@/lib/utils";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plusjakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jakarta Smart City - Nusantara Digital City",
  description:
    "Portal kota cerdas, kebudayaan Betawi, destinasi wisata, dan pelayanan publik digital DKI Jakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth overflow-auto">
      <body
        className={cn(
          plusJakartaSans.className,
          "font-sans antialiased w-full min-h-dvh bg-neutral-50 text-neutral-900 overflow-x-hidden",
        )}
      >
        <AppHeader />
        <main className="size-full min-w-xs max-w-7xl mx-auto bg-transparent">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
