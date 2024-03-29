import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import dayjs from "dayjs";
import {
  getReadableCategory,
  getReadableStatus,
  getStatusClasses,
} from "@/lib/utils";
import { projectCategories } from "@/lib/constants";
import { Button } from "../ui/button";
import { ProjectDetails } from "../drawers/project-details";
import { Project } from "@/types";
import ExpandableText from "./expandable-text";
import { PlusCircle } from "lucide-react";

type ExtendedProject = Project & {
  // Add additional fields here
  disablePropsition?: boolean;
  expanded?: boolean;
};

const ProjectCard = (props: ExtendedProject) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row align-center gap-2">
          <div className="flex align-center">
            <Badge variant={"outline"}>
              {getReadableCategory(props?.category, projectCategories)}
            </Badge>
          </div>
          <CardTitle>
            #{props.id} {props?.title}
          </CardTitle>
        </div>
        <div className="flex flex-row gap-4">
          <CardDescription>
            {dayjs(props?.createdAt).format("DD-MM-YYYY HH:mm")}
          </CardDescription>
          <Badge className={getStatusClasses(props?.status)}>
            {getReadableStatus(props?.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="whitespace-pre-wrap">
          <ExpandableText content={props?.description} maxCharacters={255} />
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-3">
        {props?.expanded && (
          <Button size={"sm"}>
            <div className="flex items-center gap-2">
    
              <PlusCircle size={16} /> New Task
            </div>
          </Button>
        )}
        {props?.status === "AVAILABLE" && !props?.disablePropsition && (
          <Button size={"sm"}>Send A Proposition</Button>
        )}
        <ProjectDetails {...props} projectCategories={projectCategories} />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
