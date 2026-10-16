import { portfolioData } from "@/data/portfolio"
import { NavLinks } from "./NavLinks"
import { NavLogo } from "./NavLogo"

const Navbar = () => {
    const { links, contactCta } = portfolioData.navigation

    return (
        <nav className="h-25 w-full sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="flex h-full items-center justify-between px-12">
                <NavLogo />
                <NavLinks links={links} contactCta={contactCta} />
            </div>
        </nav>
    )
}

export default Navbar