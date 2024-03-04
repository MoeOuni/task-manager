import WithPage from "@/components/HOC/with-page";
import OverviewTab from "@/components/dashboard/overview-tab";
import ProjectsTab from "@/components/dashboard/projects-tab";
import TasksTab from "@/components/dashboard/tasks-tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <Tabs defaultValue="overview" className="space-y-4 mt-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>
        <div className="border px-5 pb-2 rounded-md min-h-[60vh]">
        <TabsContent value="overview" className="space-y-4">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="projects" className="space-y-4">
          <ProjectsTab />
        </TabsContent>
        <TabsContent value="tasks" className="space-y-4">
          <TasksTab />
        </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default WithPage(Page);
