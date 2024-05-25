import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google"
import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Craftex",
  description: "Showcasing portfolios with stunning templates and fast performance. Submit your portfolios to display your creative work and connect with clients and collaborators.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
