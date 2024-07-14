import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/pages/navbar/Navbar";
import PageTransition from "@/components/pageTransition/PageTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Portfolio_Fahim_Fullstack_Developer",
  description: "This is my personal portfolio which showcase my activities throughout my programming journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>

        <PageTransition>
          <Navbar />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
