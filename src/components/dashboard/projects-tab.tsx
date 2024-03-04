"use client";
import React from "react";
import CardSkeleton from "../skeletons/card-skeleton";
import ProjectCard from "../global/project-card";
import SearchFilters from "../filters/search-filters";
import { PlusCircle, RotateCw } from "lucide-react";
import { Button } from "../ui/button";
import { publicProjects, projectCategories, statusList } from "@/lib/constants";
import { paginateArray } from "@/lib/utils";
import { Project } from "@/types";
import { AddProject } from "../forms/add-project";

type Props = {};

const filterOptions = [
  {
    title: "Categories",
    options: projectCategories,
  },
  {
    title: "Status",
    options: statusList,
  },
];

const totalPageCount = Math.ceil(publicProjects.length / 5);

const ProjectsTab = (props: Props) => {
  const [projects, setProjects] = React.useState<Project[]>([
    ...paginateArray(publicProjects, 5, 1),
  ]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (pageNumber > 1) {
      setLoading(true);
      setTimeout(() => {
        setProjects((prev) => [
          ...prev,
          ...paginateArray(publicProjects, 5, pageNumber),
        ]);
        setLoading(false);
      }, 1000);
    }
  }, [pageNumber]);
  return (
    <div>
      <div className="border rounded-md p-4 mb-5 flex justify-between">
        <SearchFilters filterOptions={filterOptions} disabled={loading} title="projects..."/>
        <AddProject />
      </div>
      <div className="flex flex-col gap-4">
        {projects?.map((project) => (
          <ProjectCard {...project} />
        ))}
        {loading && (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
        <div className="mx-auto">
          <Button
            disabled={totalPageCount === pageNumber || loading}
            onClick={() => {
              setPageNumber((prev) => prev + 1);
            }}
          >
            <div className="flex gap-2 items-center">
              <RotateCw size={16} />
              Load More
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;
