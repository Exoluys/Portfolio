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
        usingNow: {
            top: SkillItem[]
            bottom: SkillItem[]
        }
        learning: SkillItem[]
        otherSkills: SkillItem[]
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
            title: "DESIGN",
            description: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
        },
        {
            id: "development",
            title: "DEVELOPMENT",
            description: "Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.",
        },
        {
            id: "maintenance",
            title: "MAINTENANCE",
            description: "In case of any problems or the need for changes, I can introduce new functionalities and solutions.",
        },
    ],
    skills: {
        usingNow: {
            top: [
                { name: "NEXT JS", src: "/Logo/NEXT.png", alt: "NEXT Logo" },
                { name: "TAILWIND", src: "/Logo/Tailwind.png", alt: "Tailwind Logo" },
                { name: "HTML", src: "/Logo/Html.png", alt: "Html Logo" },
                { name: "TYPESCRIPT", src: "/Logo/Typescript.png", alt: "Typescript Logo" },
            ],
            bottom: [
                { name: "DJANGO", src: "/Logo/Django.png", alt: "Django Logo" },
                { name: "MYSQL", src: "/Logo/MySQL.png", alt: "MySQL Logo" },
                { name: "GIT", src: "/Logo/Git.png", alt: "Git Logo" },
                { name: "FIGMA", src: "/Logo/Figma.png", alt: "Figma Logo" },
            ],
        },
        learning: [
            { name: "JAVA", src: "/Logo/Java.png", alt: "Java Logo" },
            { name: "C#", src: "/Logo/Csharp.png", alt: "C# Logo" },
            { name: "DOCKER", src: "/Logo/Docker.png", alt: "Docker Logo" },
            { name: "NODE", src: "/Logo/Node.png", alt: "Node Logo" },
        ],
        otherSkills: [
            { name: "C", src: "/Logo/C.png", alt: "C Logo" },
            { name: "C++", src: "/Logo/C++.png", alt: "C++ Logo" },
            { name: "POSTGRESQL", src: "/Logo/PostgreSQL.png", alt: "PostgreSQL Logo" },
            { name: "REACT", src: "/Logo/React.png", alt: "React Logo" },
        ],
    },
    navigation: {
        links: [
            { label: "About me", targetId: "about", href: "/#about" },
            { label: "Skills", targetId: "skills", href: "/#skills" },
            { label: "Portfolio", targetId: "portfolio", href: "/portfolio", isPage: true },
        ],
        contactCta: {
            label: "CONTACT ME",
            targetId: "contact",
            href: "/#contact",
        },
    },
    projects: [],
}
