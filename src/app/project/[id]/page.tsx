"use client";

import WithPage from "@/components/HOC/with-page";
import {
  getReadableCategory,
  getReadableStatus,
  getStatusClasses,
} from "@/lib/utils";
import { Project, Task, User } from "@/types";
import { useParams } from "next/navigation";
import React from "react";
import { projectCategories, tasks } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { TeamMembers } from "@/components/global/team-members";
import { ArrowDownToLine, PlusCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TaskOverviewDetailed from "@/components/global/task-overview-detailed";
import { Button } from "@/components/ui/button";

type ProjectDetails = {
  project: Project;
  tasks: Task[];
  assignees: User[];
};

const documents = [
  {
    name: "Project Proposal",
    url: "https://example.com/project-proposal",
    size: "2.5MB",
  },
  {
    name: "Company Handbook",
    url: "https://example.com/company-handbook",
    size: "3.8MB",
  },
  {
    name: "Financial Report",
    url: "https://example.com/financial-report",
    size: "1.9MB",
  },
];

const Page = () => {
  const params = useParams<{ id: string }>();

  return (
    <div className="min-h-[80vh] border rounded-md">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 p-3">
        <div className="col-span-4 p-4 border rounded-md">
          <Badge className={`my-2 ${getStatusClasses("IN_PROGRESS")}`}>
            {getReadableStatus("IN_PROGRESS")}
          </Badge>
          <h1 className="text-2xl">#ID Project Title</h1>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">04-03-2024 19:13</span>
            <Badge variant={"outline"}>
              {getReadableCategory("N/A", projectCategories)}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap py-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. When an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <h1 className="text-xl">Documents</h1>
          <div className="flex flex-col gap-2 my-3">
            {documents.map((document, index) => (
              <a key={index} href={document.url} download={document.name}>
                <Badge variant={"outline"}>
                  <div className="flex gap-2 items-center">
                    <ArrowDownToLine size={14} />
                    {document.name} ({document.size})
                  </div>
                </Badge>
              </a>
            ))}
          </div>
          <TeamMembers />
        </div>
        <div className="col-span-3 border rounded-md">
          <div className="flex px-4 py-2 items-center justify-between">
            <h1 className="text-2xl">Project Tasks</h1>
            <Button size={"sm"}>
              <div className="flex items-center gap-2">
                <PlusCircle />
                New Task
              </div>
            </Button>
          </div>
          <ScrollArea className="h-max-[90vh] px-4 py-2">
            <div className="flex flex-col gap-3">
              {tasks?.map((task) => (
                <TaskOverviewDetailed {...task} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default WithPage(Page);
