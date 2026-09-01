import type { Metadata } from "next";
import "./globals.css";
import "./s1-theme.css";
import MobileNav from "./components/mobile-nav";

export const metadata: Metadata = { title: "Kuyumcu AI S1", description: "AI Kuyumcu Satış Asistanı" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body><MobileNav />{children}</body></html>;
}
