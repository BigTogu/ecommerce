import { JSX } from "react";
import { Project } from "@/types/projects";

interface Props {
  projects: Project[];
}

export default function ProjectsList({ projects }: Props): JSX.Element {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {projects.map((project) => (
        <div className="flex w-[250px] flex-col gap-4 rounded-md bg-grayscale-700 p-4" key={project.id}>
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="opacity-50">{project.category}</p>
            </div>
            <p>${project.price}</p>
          </div>
          <img alt={project.name} className="rounded-md" src={project.image} />
        </div>
      ))}
    </div>
  );
}
