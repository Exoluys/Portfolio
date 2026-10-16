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
    display: "swap",
})

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
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
    },
    twitter: {
        card: "summary_large_image",
        title: portfolioData.siteMetadata.title,
        description: portfolioData.siteMetadata.description,
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
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
                    >
                        Skip to content
                    </a>
                    <HashCleaner />
                    <Navbar />
                    <main id="main-content" className="flex-1">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
