import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import LoginModal from "./components/Modals/LoginModal";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb-clone",
  description: "Airbnb-clone created for skill pratice",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <NavBar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
