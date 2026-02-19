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
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
