import type { Metadata } from "next";
import "./globals.css";
import "./s1-theme.css";
import ThemeToggle from "./components/theme-toggle";
import MobileNav from "./components/mobile-nav";

export const metadata: Metadata = { title: "Kuyumcu AI S1", description: "Kuyumcu AI satış asistanı" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body><ThemeToggle /><MobileNav />{children}</body></html>;
}
