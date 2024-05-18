import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ricardo | Personal Portfolio",
  description: "Ricardo is a full-stack developer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
