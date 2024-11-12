import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";
import SidebarProvider from "@/components/sidebar/context";
import Sidebar from "@/components/sidebar/Sidebar";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto",
  weight: ["100", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <SidebarProvider>
          <Sidebar />
          <section className="ml-4 mr-12">{children}</section>
        </SidebarProvider>
      </body>
    </html>
  );
}
