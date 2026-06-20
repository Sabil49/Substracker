import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./extra.css";
import "./responsive.css";
import "./revision.css";

export const metadata: Metadata = {
  title: "Substracker Premium - Know what you pay",
  description: "Track subscriptions, understand recurring spend, and get reminders before the next charge.",
  icons: { icon: "/favicon.png", apple: "/icon.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
