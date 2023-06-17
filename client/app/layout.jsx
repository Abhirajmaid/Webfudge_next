"use client";

import "@styles/Global.css";
import "@styles/ScrollBar.css";
import "@styles/Normalize.css";

import { Nav, Footer } from "@src/components";

export const metadata = {
  title: "Webfudge",
  description: "It's an Product based Agency!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main"></div>
        <Nav />
        <main className="app">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
