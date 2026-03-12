import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "H2CI Lab @ POSTECH",
    template: "%s | H2CI Lab",
  },
  description:
    "Health and Human-Computer Interaction Lab at POSTECH. We research how technology can better support health monitoring, communication, and care.",
  keywords: ["HCI", "Health", "POSTECH", "Human-Computer Interaction", "H2CI"],
  authors: [{ name: "H2CI Lab" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "H2CI Lab @ POSTECH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
