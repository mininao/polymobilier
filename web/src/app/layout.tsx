import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Polymobilier",
  description: "Polymobilier - Maison Thorigny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        bricolageGrotesque.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <AuthKitProvider>{children}</AuthKitProvider>
      </body>
    </html>
  );
}
