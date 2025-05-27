"use client";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import FilterByCategory from "@/components/FilterByCategory/FilterByCategory";
import ProjectsList from "@/components/ProjectsList/ProjectsList";
import { fetchProjects, ProjectsFilters } from "@/services/services/projects";

const Home: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<ProjectsFilters>({ category: [] });

  const { data, isFetching } = useQuery({
    queryKey: ["projects", selectedFilters],
    queryFn: () => fetchProjects(selectedFilters),
  });

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-4xl font-bold">Proyectos</h1>
      <FilterByCategory
        onChange={(updatedFilters) => setSelectedFilters((prevFilters) => ({ ...prevFilters, ...updatedFilters }))}
        selectedFilters={selectedFilters}
      />
      <div>
        {isFetching && <p>Loading...</p>}
        {data && <ProjectsList projects={data} />}
      </div>
    </div>
  );
};

export default Home;
