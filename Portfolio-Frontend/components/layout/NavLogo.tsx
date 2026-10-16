"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { scrollToTarget } from "@/lib/scroll"
import { portfolioData } from "@/data/portfolio"

export function NavLogo() {
    const pathname = usePathname()
    const router = useRouter()
    const { name } = portfolioData.personal

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === "/") {
            e.preventDefault()
            scrollToTarget("home")
        } else {
            e.preventDefault()
            router.push("/")
        }
    }

    return (
        <Link
            href="/"
            onClick={handleClick}
            className="font-serif text-xl tracking-tight text-foreground hover:opacity-70 transition-opacity cursor-pointer font-medium"
            aria-label="Jai Revankar — Home"
        >
            {name}
        </Link>
    )
}
