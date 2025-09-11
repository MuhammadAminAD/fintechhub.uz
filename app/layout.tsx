import { Inter, Nunito_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar/NavBar";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";
import Footer from "@/components/shared/Footer/Footer";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${unbounded.variable} ${inter.variable}`}>
      <body
        className={`${nunitoSans.variable} ${unbounded.variable} ${inter.variable} antialiased`}
      >
        <div className="mb-18">
          <Loader />
          <NavBar />
        </div>
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
