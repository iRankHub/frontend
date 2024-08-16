import type { Metadata } from "next";
import { Inter, Rubik, Lato, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";

const rubik = Lato({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iRankHub",
  description: "Best platform for debates all over the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen h-full">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
