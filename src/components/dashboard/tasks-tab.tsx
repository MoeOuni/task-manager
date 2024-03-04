import React from "react";
import SearchFilters from "../filters/search-filters";
import { users, publicProjects, tasks } from "@/lib/constants";
import TaskCard from "../global/task-card";

type Props = {};

const filterOptions = [
  {
    title: "Assigned to",
    options: users,
  },
  {
    title: "Projects",
    options: publicProjects?.map((project) => ({
      label: "#" + project?.id.toString() + " " + project?.title,
      value: project?.id.toString(),
    })),
  },
];

const TasksTab = (props: Props) => {
  return (
    <div>
      <div className="border rounded-md p-4 mb-5">
        <SearchFilters filterOptions={filterOptions} title="tasks..." />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        {tasks?.map((task) => (
          <div className="col-span-4">
            <TaskCard {...task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksTab;
