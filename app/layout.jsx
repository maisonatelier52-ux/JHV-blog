

import Header from "@/components/Header";
import { Inter, Libre_Baskerville, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

/* =========================================
   FONTS
========================================= */

/* Main sans-serif font */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* Main editorial serif font */
const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Signature / script font */
const mrsSaintDelafield = Mrs_Saint_Delafield({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* =========================================
   METADATA
========================================= */

export const metadata = {
  title: {
    default: "Julio Herrera Velutini | Insights, Ideas & Perspectives",
    template: "%s | JHV",
  },

  description:
    "Thoughts on finance, global markets, family legacy, and the principles that shape a lasting future.",

  metadataBase: new URL("https://www.hvelutini.com"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

/* =========================================
   VIEWPORT
========================================= */

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

/* =========================================
   ROOT LAYOUT
========================================= */

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${libreBaskerville.variable}
        ${mrsSaintDelafield.variable}
        desk:[--u:max(0.5px,min(calc(100vw_/_1918),calc(100vh_/_820)))]
        desk:has-[.hero]:h-full
        desk:has-[.hero]:overflow-hidden
      `}
    >
      <body
        className="
          m-0
          bg-[#040404]
          font-serif
          leading-[normal]
          text-[#f5f2ec]
          antialiased
          [text-rendering:optimizeLegibility]
          desk:has-[.hero]:h-full
          desk:has-[.hero]:overflow-hidden
        "
      >
        <Header />
        {children}
      </body>
    </html>
  );
}