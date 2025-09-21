import "../styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zimbakov.dev"),
  title: "Damjan Zimbakov - Portfolio",
  description:
    "Portfolio of Damjan Zimbakov - CS Student, Mobile App Developer, ML Enthusiast",
  icons: {
    icon: "/memoji.ico",
    shortcut: "/memoji.ico",
    apple: "/memoji.ico",
  },
  openGraph: {
    title: "Damjan Zimbakov - Portfolio",
    description: "CS Student | Mobile App Developer | ML Enthusiast",
    type: "website",
    url: "https://zimbakov.dev",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Damjan Zimbakov - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damjan Zimbakov — Portfolio",
    description: "CS Student | Mobile App Developer | ML Enthusiast",
    images: ["/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-bg text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
