import { portfolioData } from "@/data/portfolio"
import { NavLinks } from "./NavLinks"
import { NavLogo } from "./NavLogo"

const Navbar = () => {
    const { links } = portfolioData.navigation

    return (
        <header className="h-16 w-full sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border transition-colors">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 sm:px-8 lg:px-12">
                <NavLogo />
                <NavLinks links={links} />
            </div>
        </header>
    )
}

export default Navbar