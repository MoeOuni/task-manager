"use client";

import React from "react";
import { publicProjects, projectCategories, statusList } from "@/lib/constants";
import ProjectCard from "@/components/global/project-card";
import SearchFilters from "@/components/filters/search-filters";

import { paginateArray } from "@/lib/utils";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import CardSkeleton from "@/components/skeletons/card-skeleton";

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

const Page = (props: Props) => {
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
    <section>
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of this month's projects!
        </p>
      </div>
      <div className="border rounded-md p-4 mb-5">
        <SearchFilters filterOptions={filterOptions} disabled={loading} title={"projects..."} />
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
    </section>
  );
};

export default Page;
