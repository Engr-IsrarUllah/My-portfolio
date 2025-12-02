import "./globals.css";
import { Inter } from "next/font/google";
import SmokeCursor from "@/components/SmokeCursor"; 

const inter = Inter({ subsets: ["latin"] });

// --- PROFESSIONAL SEO METADATA ---
// export const metadata = {
//   title: {
//     default: "Israr Ullah | Fullstack Engineer",
//     template: "%s | Israr Ullah"
//   },
//   description: "Portfolio of Israr Ullah, a Fullstack Developer and Computer Engineer specializing in Next.js 16, React, and .NET.",
//   keywords: ["Fullstack Developer", "Next.js", "React", "Pakistan", "Software Engineer", "MERN Stack"],
//   authors: [{ name: "Israr Ullah" }],
//   openGraph: {
//     title: "Israr Ullah | Fullstack Engineer",
//     description: "Building scalable web apps with Next.js 16 and Modern UI.",
//     url: "https://your-domain.vercel.app", // <--- Change this once deployed
//     siteName: "Israr.Dev",
//     images: [
//       {
//         url: "/og-image.png", // <--- Put a screenshot in your public/ folder
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };
export const metadata = {
  // ... other properties
  openGraph: {
    title: "Israr Ullah | Fullstack Engineer",
    description: "Building scalable web apps with Next.js 16 and Modern UI.",
    url: "https://your-domain.vercel.app", // <--- CHANGE THIS after deployment
    siteName: "Israr.Dev",

    images: ["/opengraph-image.png"], 
    // ...
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