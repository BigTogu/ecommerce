"use client";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import FilterByCategory from "@/components/FilterByCategory/FilterByCategory";
import { SkeletonGrid } from "@/components/UI/SkeletonGrid/SkeletonGrid";
import { fetchProjects, ProjectsFilters } from "@/services/services/projects";

const Home: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<ProjectsFilters>({ category: [] });

  const { data, isFetching, isError } = useQuery({
    queryKey: ["projects", JSON.stringify(selectedFilters)],
    queryFn: () => fetchProjects(selectedFilters),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="flex flex-col gap-2 ">
      <FilterByCategory
        onChange={(updatedFilters) => setSelectedFilters((prevFilters) => ({ ...prevFilters, ...updatedFilters }))}
        selectedFilters={selectedFilters}
      />
      <section className="w-full px-4">
        {isFetching && <SkeletonGrid />}

        {isError && <p className="text-red-500 text-center text-lg">Error cargando proyectos.</p>}

        {!isFetching && (
          <div className="columns-1 sm:columns-2 gap-8 space-y-8 max-w-4xl mx-auto">
            {data?.map((project) => (
              <article className="break-inside-avoid bg-white p-2" key={project.id}>
                <img alt={project.name} className="w-full h-auto object-cover" loading="lazy" src={project.image} />
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
