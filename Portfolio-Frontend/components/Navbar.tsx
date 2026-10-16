"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"
import Image from "next/image"
import { useActiveSection } from "@/hooks/useActiveSection"
import { scrollToTarget } from "@/lib/scroll"

const Navbar = () => {
    const activeSection = useActiveSection(["home", "about", "skills", "contact"])
    const pathname = usePathname()
    const router = useRouter()

    const handleNav = (targetId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === "/") {
            e.preventDefault()
            scrollToTarget(targetId)
        } else {
            // If on another route like /portfolio, navigate to '/'
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
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/#about"
                                        onClick={handleNav("about")}
                                        className={`px-6 py-2 hover:scale-105 transition-all duration-200 ${activeSection === "about" ? "text-primary font-bold" : ""}`}
                                    >
                                        About me
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/#skills"
                                        onClick={handleNav("skills")}
                                        className={`px-6 py-2 hover:scale-105 transition-all duration-200 ${activeSection === "skills" ? "text-primary font-bold" : ""}`}
                                    >
                                        Skills
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/portfolio" className="px-6 py-2 hover:scale-105 transition-transform duration-200">Portfolio</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button variant="default" className="px-6 py-4 font-bold rounded-full" asChild>
                        <Link href="/#contact" onClick={handleNav("contact")}>CONTACT ME</Link>
                    </Button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar