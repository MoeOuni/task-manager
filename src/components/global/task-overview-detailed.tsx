import { Task } from "@/types";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import dayjs from "dayjs";
import { TaskDetails } from "../drawers/task-details";

type Props = Partial<Task>;

const TaskOverviewDetailed = (props: Props) => {
  return (
    <Card className="">
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-[16px]">
            #{props.id} {props?.title}
          </CardTitle>
        </div>
        <div>
          <CardDescription className="flex flex-col">
            <span>
              Due Date: {dayjs(props?.dueDate).format("DD-MM-YYYY HH:mm")}
            </span>
          </CardDescription>
          {props?.assigned_user_id ? (
            <Badge>{props?.assigned_user_name}</Badge>
          ) : (
            <Badge>Not Assigned</Badge>
          )}
        </div>
      
        <TaskDetails />
       
      </CardHeader>
      
    </Card>
  );
};

export default TaskOverviewDetailed;
