import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeAstroFit — AI-guided Astrology",
  description: "Astrology you can act on. AI insights + expert validation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-text antialiased">
        <div className="mx-auto max-w-7xl px-4">{children}</div>
      </body>
    </html>
  );
}
