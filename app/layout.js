import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsBtn from "@/components/FloatingWhatsBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pranjal Singh | Full-Stack Developer & AI Integration",
  description:
    "Portfolio of Pranjal Singh, a Full-Stack Developer specializing in responsive frontend interfaces, scalable backend systems, and AI integration.",
  keywords: [
    "Pranjal Singh",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Integration",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Web Development",
  ],
  authors: [{ name: "Pranjal Singh" }],
  openGraph: {
    title: "Pranjal Singh | Full-Stack Developer & AI Integration",
    description:
      "Building powerful web experiences from frontend to backend with cutting-edge AI integration.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#060913] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
        <FloatingWhatsBtn />
      </body>
    </html>
  );
}
