"use client";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useState } from "react";
import { CartProvider } from "./_context/CartContext";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ClerkProvider>
      <CartProvider>
        <html lang="en">
          <body className={`${roboto.className} `}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  );
}
