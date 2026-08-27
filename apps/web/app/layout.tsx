import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@designally/ui/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Designally — Independent Design Agency",
    template: "%s | Designally",
  },
  description:
    "Designally creates thoughtful brands and digital experiences for ambitious businesses.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
