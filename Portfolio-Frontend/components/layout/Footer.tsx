"use client";

import { portfolioData } from '@/data/portfolio';
import { scrollToTarget } from '@/lib/scroll';

const Footer = () => {
    const { copyrightName } = portfolioData.personal
    const currentYear = new Date().getFullYear()

    const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        scrollToTarget("home")
    }

    return (
        <footer className="w-full border-t border-border bg-background transition-colors">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                <p>
                    © {currentYear} {copyrightName}. All rights reserved.
                </p>

                <a
                    href="#top"
                    onClick={handleScrollTop}
                    className="text-foreground hover:opacity-70 transition-opacity pb-0.5 border-b border-foreground cursor-pointer"
                >
                    Back to top ↑
                </a>
            </div>
        </footer>
    )
}

export default Footer