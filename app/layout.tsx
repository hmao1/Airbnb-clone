import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb-clone",
  description: "Airbnb-clone created for skill pratice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <RegisterModal />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
