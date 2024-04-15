"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./components/layout/header";
import { useState } from "react";
import { initialState } from "./components/user/service/user.init";

const ReduxProvider = dynamic(() => import("@/redux/redux-provider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  if (initialState.login === "True") {
    setShowHeader(true);
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        {showHeader && <Header />}
        <div>
          <ReduxProvider> {children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
