import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kingdom Exchange Mission Network",
  description:
    "A directory connecting kingdom-minded organizations, volunteers, donors, and missionaries worldwide.",
  keywords: ["missions", "kingdom", "nonprofit", "volunteers", "ministry", "directory"],
  openGraph: {
    title: "Kingdom Exchange Mission Network",
    description:
      "Connecting kingdom-minded organizations, volunteers, donors, and missionaries worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased bg-navy text-cream font-body">
        {children}
      </body>
    </html>
  );
}
