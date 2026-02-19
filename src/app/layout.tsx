import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vayro Media | Digital Marketing Agency",
  description: "Next-generation digital marketing agency specializing in strategic growth and brand building.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
