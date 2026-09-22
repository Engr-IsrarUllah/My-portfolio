import "./globals.css";
import { Inter } from "next/font/google";
import SmokeCursor from "@/components/SmokeCursor"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://israr-dev-portfolio.vercel.app"),
  title: "Israr Ullah | Full-Stack AI Developer & Software Engineer",
  description:
    "Full-Stack AI Developer specializing in scalable distributed architectures, autonomous agentic workflows (LangGraph & RAG), and production-grade web systems.",
  keywords: [
    "Israr Ullah",
    "Full-Stack AI Developer",
    "Software Engineer",
    "Next.js",
    "LangGraph",
    "RAG",
    "FastAPI",
    "Python",
    "TypeScript",
    "MERN Stack",
  ],
  authors: [{ name: "Israr Ullah" }],
  openGraph: {
    title: "Israr Ullah | Full-Stack AI Developer",
    description: "Engineering Scalable Systems & Intelligent Products.",
    url: "https://israr-dev-portfolio.vercel.app/",
    siteName: "Israr.Dev",
    images: ["/opengraph-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Israr Ullah | Full-Stack AI Developer",
    description: "Engineering Scalable Systems & Intelligent Products.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#09090b] text-zinc-100 relative`}>
        {/* 1. Background Grid (Fixed behind everything) */}
        <div className="fixed inset-0 z-0 bg-grid-white opacity-40 pointer-events-none" />

        {/* 2. Interactive Micro-Data Dust Canvas */}
        <SmokeCursor />

        {/* 3. Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}