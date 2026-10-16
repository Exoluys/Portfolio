"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"
import Image from "next/image"
import { portfolioData } from "@/data/portfolio"
import { useActiveSection } from "@/hooks/useActiveSection"
import { scrollToTarget } from "@/lib/scroll"


const Navbar = () => {
    const { links, contactCta } = portfolioData.navigation
    const scrollSectionIds = ["home", ...links.filter((l) => !l.isPage).map((l) => l.targetId), contactCta.targetId]
    const activeSection = useActiveSection(scrollSectionIds)
    const pathname = usePathname()
    const router = useRouter()

    const handleNav = (targetId: string, isPage?: boolean) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isPage) {
            return
        }

        if (pathname === "/") {
            e.preventDefault()
            scrollToTarget(targetId)
        } else {
            e.preventDefault()
            router.push(targetId === "home" ? "/" : `/#${targetId}`)
        }
    }

    return (
        <nav className="h-25 w-full sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="flex h-full items-center justify-between px-12">
                <Link href="/" onClick={handleNav("home")} className="cursor-pointer">
                    <Image
                        src="/favicon.png"
                        alt="Logo"
                        width={100}
                        height={1}
                    />
                </Link>

                <div className="flex items-center pr-6 gap-5">
                    <NavigationMenu>
                        <NavigationMenuList className="font-semibold gap-3">
                            {links.map((link) => {
                                const isCurrent = link.isPage
                                    ? pathname === link.href
                                    : pathname === "/" && activeSection === link.targetId

                                return (
                                    <NavigationMenuItem key={link.targetId}>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={link.href}
                                                onClick={handleNav(link.targetId, link.isPage)}
                                                className={`px-6 py-2 transition-all duration-200 hover:scale-105 ${isCurrent ? "text-primary font-bold" : ""
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                )
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button variant="default" className="px-6 py-4 font-bold rounded-full" asChild>
                        <Link href={contactCta.href} onClick={handleNav(contactCta.targetId)}>
                            {contactCta.label}
                        </Link>
                    </Button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar

