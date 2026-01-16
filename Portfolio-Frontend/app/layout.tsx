import type { Metadata } from "next";
import { Montserrat, Advent_Pro } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ScrollOnRefresh from "@/components/Scroll/ScrollOnRefresh";
import ScrollSpy from "@/components/Scroll/ScrollSpy";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const adventPro = Advent_Pro({
    subsets: ["latin"],
    variable: "--font-advent",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My Portfolio",
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.png"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${montserrat.className} ${adventPro.variable} antialiased h-screen flex flex-col`}>
                <ThemeProvider>
                    <Navbar />
                    <main className="flex-1 overflow-y-auto scroll-smooth">
                        <ScrollOnRefresh />
                        <ScrollSpy />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html >
    );
}
