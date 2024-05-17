import "./styles/globals.css";
import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DMSans.className}>{children}</body>
    </html>
  );
}
