import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Kuyumcu AI S1", description: "Kuyumcu AI satış asistanı" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
