import { projects } from "../data/projects";
import { Category } from "@/types/projects";

export interface ProjectsFilters {
  category: Category[];
}

export const fetchProjects = async (options?: ProjectsFilters): Promise<typeof projects> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let filteredProjects = projects;

  if (options?.category?.length) {
    const selectedCategories = new Set(options.category);
    filteredProjects = filteredProjects.filter((project) =>
      project.category.some((category) => selectedCategories.has(category)),
    );
  }

  return filteredProjects;
};
