"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { useActiveSection } from "@/hooks/useActiveSection"
import { scrollToTarget } from "@/lib/scroll"
import { NavLinkItem } from "@/data/portfolio"

interface NavLinksProps {
    links: NavLinkItem[]
    contactCta: {
        label: string
        targetId: string
        href: string
    }
}

export function NavLinks({ links, contactCta }: NavLinksProps) {
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
                                        className={`px-6 py-2 transition-all duration-200 hover:scale-105 ${
                                            isCurrent ? "text-primary font-bold" : ""
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
    )
}
