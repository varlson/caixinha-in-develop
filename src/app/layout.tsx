import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/partials/MainLayout/MainLayout";
import AppWrapper from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "República Balburdia",
  description: "Controle de sistema de caixinha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <MainLayout>{children}</MainLayout>
        </AppWrapper>
      </body>
    </html>
  );
}
