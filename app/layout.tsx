import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MenuSheet } from "./menu-sheet";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jeff Thomas | Engineer",
  description: "Portfolio of Jeff Thomas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b border-border flex justify-between bg-background">
            <div className="max-w-3xl m-auto flex w-full justify-between p-2 px-4">
              <MenuSheet />
              <ModeToggle />
            </div>
          </header>
          <div className="min-h-full">{children}</div>
          <footer className="sticky bottom-0 w-full border-t border-border bg-background">
            <div className="max-w-3xl m-auto flex w-full justify-between p-2 px-4">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Jeff Thomas
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
