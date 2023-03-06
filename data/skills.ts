import type { Technology } from "./works";

enum SkillCategory {
  Programming = "Programming",
  Web = "Web",
  Mobile = "Mobile",
  Design = "Design",
}

interface Skill extends Technology {
  yearLearnt: number;
  category: SkillCategory;
}

const skills: Skill[] = [
  {
    friendlyName: "Python",
    iconName: "python",
    yearLearnt: 2020,
    category: SkillCategory.Programming,
  },
  {
    friendlyName: "Next.js",
    iconName: "nextdotjs",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "JavaScript",
    iconName: "javascript",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "TypeScript",
    iconName: "typescript",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "React",
    iconName: "react",
    yearLearnt: 2022,
    category: SkillCategory.Web,
  },
  {
    friendlyName: "React Native",
    iconName: "react",
    yearLearnt: 2021,
    category: SkillCategory.Mobile,
  },
];

export default skills;
