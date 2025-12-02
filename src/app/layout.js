import "./globals.css";
import { Inter } from "next/font/google";
import SmokeCursor from "@/components/SmokeCursor"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // ... other properties
  openGraph: {
    title: "Israr Ullah | Fullstack Engineer",
    description: "Building scalable web apps with Next.js 16 and Modern UI.",
    url: "https://israr-dev-portfolio.vercel.app/",
    siteName: "Israr.Dev",

    images: ["/opengraph-image.png"], 
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[rgb(10,10,10)] text-white relative`}>
        
        {/* 1. Background Grid (Fixed behind everything) */}
        <div className="fixed inset-0 z-0 bg-grid-white opacity-20 pointer-events-none"></div>

        {/* 2. The Smoke Effect (Fixed) */}
        <SmokeCursor />

        {/* 3. Page Content (Relative so it sits ON TOP of smoke) */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}