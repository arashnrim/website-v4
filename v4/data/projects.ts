interface Technology {
    friendlyName: string;
    iconName: string;
}

interface Project {
    name: string;
    githubLink: string;
    websiteLink?: string;
    tech: Technology[];
    description: string;
    largeTile: boolean;
    year: number;
    backgroundColor?: {
        hue: number;
        saturation: number;
        lightness: number;
    };
}

const projects: Project[] = [
    {
        name: "Commute",
        githubLink: "https://github.com/arashnrim/commute",
        tech: [
            { friendlyName: "TypeScript", iconName: "typescript" },
            { friendlyName: "Telegraf", iconName: "telegram" },
        ],
        description: "A Telegram bot that helps you find the best public route to your destination.",
        largeTile: true,
        year: 2022,
        backgroundColor: {
            hue: 218,
            saturation: 1,
            lightness: 0.5,
        }
    },
     {
        name: "tp",
        githubLink: "https://github.com/arashnrim/tp",
        tech: [
            { friendlyName: "go", iconName: "go" },
        ],
        description: "A CLI tool that lets you teleport anywhere and run commands in an instant.",
        largeTile: false,
        year: 2022,
     },
     {
        name: "Upgrade",
        githubLink: "https://github.com/arashnrim/upgrade",
        tech: [
            { friendlyName: "Swift", iconName: "swift" },
            { friendlyName: "Firebase", iconName: "firebase" },
        ],
        description: "An app for students to understand their academic achievements better.",
        largeTile: false,
        year: 2019,
        backgroundColor: {
            hue: 263,
            saturation: 0.77,
            lightness: 0.62,
        }
     },
     {
        name: "Listé",
        githubLink: "https://github.com/arashnrim/liste",
        websiteLink: "https://apps.apple.com/us/app/list%C3%A9-productive-to-do/id1486116734",
        tech: [
            { friendlyName: "Swift", iconName: "swift" },
            { friendlyName: "Firebase", iconName: "firebase" },
        ],
        description: "An open-sourced to-do list app made for everyone.",
        largeTile: false,
        year: 2019,
        backgroundColor: {
            hue: 9,
            saturation: 1,
            lightness: 0.5,
        }
     }
]

export default projects;
