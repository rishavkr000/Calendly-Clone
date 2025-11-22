import "./globals.css";
import {Inter} from "next/font/google"

export const metadata = {
  title: "Calendly Clone",
  description: "Meeting Scheduling App",
};

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-linear-to-b from-blue-50 to-white">{children}</main>
      </body>
    </html>
  );
}
