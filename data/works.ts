interface Technology {
  friendlyName: string;
  iconName: string;
}

interface Project {
  name: string;
  githubLink?: string;
  websiteLink?: string;
  tech?: Technology[];
  description: string;
  largeTile?: boolean;
  year?: number;
  image?: ImageMetadata;
  backgroundColor?: {
    hue: number;
    saturation: number;
    lightness: number;
  };
}

import commute from "./public/images/works/commute.png";
import desperateDefenders from "./public/images/works/desperate-defenders.png";
import feducia from "./public/images/works/feducia.png";
// import liste from "./public/images/works/liste.png";
import tp from "./public/images/works/tp.png";
import upgrade from "./public/images/works/upgrade.png";

const projects: Project[] = [
  {
    name: "Commute",
    githubLink: "https://github.com/arashnrim/commute",
    tech: [
      { friendlyName: "TypeScript", iconName: "typescript" },
      { friendlyName: "Telegraf", iconName: "telegram" },
      { friendlyName: "Railway", iconName: "railway" },
    ],
    description:
      "A Telegram bot that helps you find the best public route to your destination.",
    largeTile: true,
    year: 2022,
    image: commute,
    backgroundColor: {
      hue: 218,
      saturation: 1,
      lightness: 0.5,
    },
  },
  {
    name: "tp",
    githubLink: "https://github.com/arashnrim/tp",
    tech: [{ friendlyName: "Go", iconName: "go" }],
    description:
      "A CLI tool that lets you teleport anywhere and run commands in an instant.",
    largeTile: false,
    year: 2022,
    image: tp,
  },
  {
    name: "Upgrade",
    githubLink: "https://github.com/arashnrim/upgrade",
    tech: [
      { friendlyName: "Swift", iconName: "swift" },
      { friendlyName: "Firebase", iconName: "firebase" },
    ],
    description:
      "An app for students to understand their academic achievements better.",
    largeTile: false,
    year: 2019,
    image: upgrade,
    backgroundColor: {
      hue: 263,
      saturation: 0.77,
      lightness: 0.62,
    },
  },
  {
    name: "Listé",
    githubLink: "https://github.com/arashnrim/liste",
    websiteLink:
      "https://apps.apple.com/us/app/list%C3%A9-productive-to-do/id1486116734",
    tech: [
      { friendlyName: "Swift", iconName: "swift" },
      { friendlyName: "Firebase", iconName: "firebase" },
    ],
    description: "An open-sourced to-do list app made for everyone.",
    largeTile: false,
    year: 2019,
    // image: liste,
    backgroundColor: {
      hue: 9,
      saturation: 1,
      lightness: 0.5,
    },
  },
  {
    name: "feducia",
    githubLink: "https://github.com/arashnrim/feducia",
    websiteLink: "https://devpost.com/software/feducia",
    tech: [
      { friendlyName: "Next.js", iconName: "nextdotjs" },
      { friendlyName: "Tailwind CSS", iconName: "tailwindcss" },
      { friendlyName: "Express", iconName: "express" },
      { friendlyName: "Solidity", iconName: "solidity" },
      { friendlyName: "Vercel", iconName: "vercel" },
      { friendlyName: "Railway", iconName: "railway" },
    ],
    description:
      "A concept of what decentralised banking can look like with crypto.",
    largeTile: false,
    year: 2022,
    image: feducia,
    backgroundColor: {
      hue: 218,
      saturation: 0.77,
      lightness: 0.49,
    },
  },
  {
    name: "Desperate Defenders",
    githubLink: "https://github.com/arashnrim/desperate-defenders",
    tech: [{ friendlyName: "Python", iconName: "python" }],
    description:
      "A small CLI tower defence game made with Python for a school assignment.",
    largeTile: true,
    year: 2022,
    image: desperateDefenders,
  },
];

export default projects;
export type { Project, Technology };
