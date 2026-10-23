
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kalim | Singer & Live Performer",
  description:
    "Discover music, live performances, photographs, and booking information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
