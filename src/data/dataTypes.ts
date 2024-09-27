export interface MobileNavLinksType {
  path: string;
  name: string;
  icon: React.ReactNode;
}

export interface MobileSocialLinksType {
  path: string;
  name: string;
  icon: React.ReactNode;
}

export interface ProjectsType {
  id: number;
  title: string;
  techStacks: string;
  imgSrc: string;
  altText: string;
  github: string;
  live: string;
}

export interface MoreProjectsType {
  id: number;
  title: string;
  techStacks: Array<String>;
  description: string;
  github: string;
  live: string;
}

export interface TechIconsType {
  id: number;
  title: string;
  imgSrc: string;
  altText: string;
}

export interface TechCardProps {
  iterableArray: Array<TechIconsType>;
  cardTitle: string;
}
