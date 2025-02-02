import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Santiago Gericke | Full-Stack Developer, Generative AI Specialist, and Entrepreneur",
  description:
    "Welcome to the portfolio of Santiago Gericke, a full-stack developer, generative AI specialist, and entrepreneur. Discover projects in Next.js, Python, and cloud solutions, and learn more about Santiago's journey from consulting to entrepreneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} antialiased`}>{children}</body>
    </html>
  );
}
