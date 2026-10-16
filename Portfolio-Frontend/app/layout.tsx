import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { HashCleaner } from "@/components/HashCleaner";

import { portfolioData } from "@/data/portfolio";

const newsreader = Newsreader({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-serif",
})

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
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
            <body className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}>
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
