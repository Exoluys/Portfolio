import type { Metadata } from "next";
import { Montserrat, Advent_Pro } from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const adventPro = Advent_Pro({
    subsets: ["latin"],
    variable: "--font-advent",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
    title: "Portfolio Page",
    description: "My Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${montserrat.variable} ${adventPro.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
