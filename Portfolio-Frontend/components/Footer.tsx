"use client";

import { ChevronsUp } from 'lucide-react';
import Link from 'next/link';
import { scrollToTarget } from '@/lib/scroll';

const Footer = () => {
    const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        scrollToTarget("home")
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
            <Link
                href="#top"
                onClick={handleScrollTop}
                className="mb-8 text-sm tracking-wider hover:text-gray-300 transition-colors uppercase flex flex-col items-center gap-1 cursor-pointer"
            >
                <ChevronsUp size={24} />
                Back to Top
            </Link>

            <p className="text-sm text-gray-400">
                @2026 <span className="text-white">Jai Revankar</span> All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer