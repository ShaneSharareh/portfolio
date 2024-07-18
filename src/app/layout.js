import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shane Sharareh | Developer",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link rel="shortcut icon" type="image/png" href="/images/icons/header-tab-icon.jpg"></link>
    </html>
  );
}
