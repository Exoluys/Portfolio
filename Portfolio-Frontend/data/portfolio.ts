export interface SocialLink {
    platform: string
    url: string
    ariaLabel: string
}

export interface Service {
    id: string
    title: string
    description: string
}

export interface SkillItem {
    name: string
    src: string
    alt: string
}

export interface NavLinkItem {
    label: string
    targetId: string
    href: string
    isPage?: boolean
}

export interface ProjectItem {
    title: string
    description: string
    tech: string[]
    liveUrl?: string
    githubUrl?: string
    image?: string
}

export interface PortfolioData {
    personal: {
        greeting: string
        name: string
        role: string
        tagline: string
        heroSubtext: string
        email: string
        copyrightName: string
        copyrightYear: number
    }
    siteMetadata: {
        title: string
        titleTemplate: string
        description: string
        siteUrl: string
        keywords: string[]
    }
    socialLinks: {
        email: SocialLink
        github: SocialLink
        linkedin: SocialLink
    }
    bio: string[]
    services: Service[]
    skills: {
        usingNow: string[]
        learning: string[]
        otherSkills: string[]
    }
    navigation: {
        links: NavLinkItem[]
        contactCta: {
            label: string
            targetId: string
            href: string
        }
    }
    projects: ProjectItem[]
}

export const portfolioData: PortfolioData = {
    personal: {
        greeting: "my name is Jai",
        name: "Jai Revankar",
        role: "I'M A DEVELOPER",
        tagline: "Python & Django Developer",
        heroSubtext: "I build web apps and automation tools with Python and Django, and I edit video on the side.",
        email: "jairevankar98@gmail.com",
        copyrightName: "Jai Revankar",
        copyrightYear: new Date().getFullYear(),
    },
    siteMetadata: {
        title: "Jai Revankar | Python & Django Developer",
        titleTemplate: "%s | Jai Revankar",
        description: "Portfolio of Jai Revankar, a passionate developer specializing in Python, Django, Next.js, and modern web applications.",
        siteUrl: "https://jairevankar.dev",
        keywords: ["Jai Revankar", "Python Developer", "Django Developer", "Full Stack Developer", "Next.js", "React", "Portfolio"],
    },
    socialLinks: {
        email: {
            platform: "Email",
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=jairevankar98@gmail.com",
            ariaLabel: "Send email to Jai Revankar",
        },
        github: {
            platform: "GitHub",
            url: "https://github.com/Exoluys",
            ariaLabel: "Jai Revankar GitHub Profile",
        },
        linkedin: {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/jai-revankar-002bb0215/",
            ariaLabel: "Jai Revankar LinkedIn Profile",
        },
    },
    bio: [
        "Hi, I'm Jai Revankar, a passionate developer with a strong background in Python, Django, and front-end technologies. I enjoy building clean, efficient, and user-friendly applications, from web platforms to automation tools. Beyond coding, I'm a creative thinker with experience in video editing, and I thrive on turning ideas into real, functional solutions.",
        "I value continuous learning and take pride in refining my skills—whether it's exploring new frameworks, improving UI/UX, or experimenting with innovative projects. I'm always looking for opportunities to contribute, collaborate, and create impactful digital experiences.",
    ],
    services: [
        {
            id: "design",
            title: "Design",
            description: "Thoughtful UI/UX systems built with clean visual hierarchy, accessibility, and clear intent from concept to prototype.",
        },
        {
            id: "development",
            title: "Development",
            description: "Robust full-stack web applications and automation tools programmed with Python, Django, Next.js, and clean API design.",
        },
        {
            id: "maintenance",
            title: "Maintenance",
            description: "Continuous code refactoring, performance optimization, and reliable feature development to keep applications resilient.",
        },
    ],
    skills: {
        usingNow: [
            "Python",
            "Django",
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "HTML5 / CSS3",
            "MySQL",
            "Git",
            "Figma",
        ],
        learning: [
            "Docker",
            "Node.js",
            "Java",
            "C#",
        ],
        otherSkills: [
            "PostgreSQL",
            "C / C++",
            "Video Editing",
            "Automation Scripting",
            "REST APIs",
        ],
    },
    navigation: {
        links: [
            { label: "About", targetId: "about", href: "/#about" },
            { label: "Skills", targetId: "skills", href: "/#skills" },
            { label: "Work", targetId: "portfolio", href: "/portfolio", isPage: true },
            { label: "Contact", targetId: "contact", href: "/#contact" },
        ],
        contactCta: {
            label: "Contact",
            targetId: "contact",
            href: "/#contact",
        },
    },
    projects: [],
}
