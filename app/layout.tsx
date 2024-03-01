import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI tools",
  description: "App with 3 useful Ai tools",
};

interface RootLayoutProps {
  readonly children: React.ReactNode; // Mark children as read-only
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* // note "dark" es una clase de tailwindcss que se encarga de cambiar el color de fondo */}
      <body className={cn("dark text-gray-300", inter.className)}>
        <main className="ml-[100px] px-5 xl:-px-0 ">{children}</main>
      </body>
    </html>
  );
}
