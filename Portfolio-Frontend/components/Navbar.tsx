"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"

const Navbar = () => {
    return (
        <nav className="h-25 w-full">
            <div className="flex h-full items-center justify-end px-6 gap-5">
                <NavigationMenu>
                    <NavigationMenuList className="gap-3">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="#about" className="px-6 py-2">About me</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="#skills" className="px-6 py-2">Skills</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className="px-6 py-2">Portfolio</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Button variant="default" className="px-6 py-4 font-medium rounded-full" asChild>
                    <Link href="#ContactMe">CONTACT ME</Link>
                </Button>
            </div>
        </nav>
    )
}

export default Navbar