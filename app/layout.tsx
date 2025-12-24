import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAYVI - Transform Your Business Digitally",
  description: "Digital agency transforming traditional businesses into digital powerhouses. Web Development, E-commerce, and Digital Marketing automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
