import React from "react";
import StatistiqueCard from "../global/statistique-card";
import {
  AlarmClock,
  AlarmClockCheck,
  FolderCheck,
  FolderGit,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { publicProjects, tasks } from "@/lib/constants";
import ProjectOverview from "../global/project-overview";
import TaskOverview from "../global/task-overview";

type Props = {};

const OverviewTab = (props: Props) => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatistiqueCard
          title="Total Projects"
          unit="project(s)"
          value="5"
          icon={<FolderGit />}
        />
        <StatistiqueCard
          title="Completed Projects"
          unit="project(s)"
          value="5"
          icon={<FolderCheck />}
        />
        <StatistiqueCard
          title="Total Tasks"
          unit="task(s)"
          value="5"
          icon={<AlarmClock />}
        />
        <StatistiqueCard
          title="Completed Tasks"
          unit="task(s)"
          value="5"
          icon={<AlarmClockCheck />}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Latest Projects</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 flex flex-col gap-3 ml-3">
            {publicProjects.slice(0, 4).map((project) => (
              <ProjectOverview {...project} />
            ))}
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Latest Tasks</CardTitle>
            <CardDescription>
              5 new tasks has been updated today.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {
                tasks?.map((task) => (
                    <TaskOverview {...task} />
                ))
            }
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
