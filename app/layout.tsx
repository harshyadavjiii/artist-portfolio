import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "./site-nav";
import { getContent } from "../lib/content";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { settings } = await getContent();
  return { title: settings.siteTitle, description: settings.siteDescription };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
