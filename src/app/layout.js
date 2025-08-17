import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arun Constructions",
  description: "Arun Constructions - Building Dreams with Quality and Care",
  icons: {
    icon: [
      { url: "/brand.jpg", type: "image/jpg" },
      { url: "/brand.jpg", type: "image/jpg" },
    ],
    apple: "/brand.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>

          {children}
        </LayoutWrapper>

      </body>
    </html>
  );
}
