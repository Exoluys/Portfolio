import type { Metadata } from "next";
import { Montserrat, Advent_Pro } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { HashCleaner } from "@/components/HashCleaner";

import { portfolioData } from "@/data/portfolio";

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
    title: {
        default: portfolioData.siteMetadata.title,
        template: portfolioData.siteMetadata.titleTemplate,
    },
    description: portfolioData.siteMetadata.description,
    keywords: portfolioData.siteMetadata.keywords,
    authors: [{ name: portfolioData.personal.name }],
    creator: portfolioData.personal.name,
    metadataBase: new URL(portfolioData.siteMetadata.siteUrl),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: portfolioData.siteMetadata.siteUrl,
        title: portfolioData.siteMetadata.title,
        description: portfolioData.siteMetadata.description,
        siteName: portfolioData.personal.name,
        images: [
            {
                url: "/favicon.png",
                width: 512,
                height: 512,
                alt: `${portfolioData.personal.name} Logo`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: portfolioData.siteMetadata.title,
        description: portfolioData.siteMetadata.description,
        images: ["/favicon.png"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${montserrat.className} ${adventPro.variable} antialiased min-h-screen flex flex-col`}>
                <ThemeProvider>
                    <HashCleaner />
                    <Navbar />
                    <main className="flex-1">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
