import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google"
import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import Navbar from "./_components/nav-bar";
import ThemeProvider from "./provider";
import Footer from "./_components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "FolioHive",
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >
          <TRPCReactProvider>
            <Navbar />
            <div className="flex flex-col min-h-[86vh]">
              {children}
            </div>
            <Footer />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
