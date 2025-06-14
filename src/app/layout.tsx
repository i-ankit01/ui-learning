import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Kumar",
  description: "Hi, I'm Ankit Kumar — a passionate Full Stack Developer and AI enthusiast skilled in MERN, Java, and Machine Learning. I build impactful real-world tech.",
  keywords: [
    "Ankit Kumar",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java Developer",
    "Web Development",
    "AI Enthusiast",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Chatbot Developer",
    "OpenAI Projects",
    "B.Tech IT",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="none" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
