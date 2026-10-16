"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { scrollToTarget } from "@/lib/scroll"

export function NavLogo() {
    const pathname = usePathname()
    const router = useRouter()

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
        <Link href="/" onClick={handleClick} className="cursor-pointer" aria-label="Go to home">
            <Image
                src="/favicon.png"
                alt="Jai Revankar Logo"
                width={100}
                height={1}
            />
        </Link>
    )
}
