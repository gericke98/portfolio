import { IconType } from "react-icons/lib";

export type ProjectType = {
  id: number;
  name: string;
  description: string;
  a: number;
  b: number;
};

export type Project = {
  name: string;
  link: string;
  description: string;
  techStack?: string[];
};

export type Skill = {
  title: string;
  description: string;
  icon: IconType;
  projects?: Project[];
  learning?: string[];
};
