import { FC } from "react";
import { projects } from "@/data/projects";
import { ProjectsType } from "@/data/dataTypes";
import ProjectCard from "./Card/projectCard";
import { Button } from "./ui/button";
import Link from "next/link";

const Projects: FC = () => {
  return (
    <section className="flex w-full flex-col gap-10">
      <div>
        <h3 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight">
          Projects
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {projects.map(
          ({
            id,
            imgSrc,
            altText,
            title,
            techStacks,
            live,
            github,
          }: ProjectsType) => {
            return (
              <ProjectCard
                key={id}
                id={id}
                imgSrc={imgSrc}
                altText={altText}
                title={title}
                techStacks={techStacks}
                live={live}
                github={github}
              />
            );
          }
        )}
      </div>
      <div className="text-center">
        <Button
          asChild
          className="rounded-lg border-2 border-green-600 bg-green-600 hover:bg-transparent"
        >
          <Link href="/projects">More Projects</Link>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
