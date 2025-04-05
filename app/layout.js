import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wedding Invitation",
  description: "Siddharth & Pooja's Wedding Invitation",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Wedding Invitation",
    description: "Siddharth & Pooja's Wedding Invitation",
    images: [{
      url: "https://wedding.siddharthdangarh.com/images/couple/preview.jpeg",
      width: 1200,
      height: 630,
      alt: "Wedding Invitation Preview"
    }]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
