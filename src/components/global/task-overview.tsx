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

type Props = Partial<Task>;

const TaskOverview = (props: Props) => {
  return (
    <Card className="bg-muted">
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-[16px]">
            #{props.id} {props?.title}
          </CardTitle>
        </div>
        <div className="">
          <CardDescription className="flex flex-col">
            <span>
              {" "}
              Due Date: {dayjs(props?.dueDate).format("DD-MM-YYYY HH:mm")}
            </span>
            <span>
              Created At: {dayjs(props?.created_at).format("DD-MM-YYYY HH:mm")}
            </span>
          
          </CardDescription>
          {props?.assigned_user_id ? (
            <Badge>{props?.assigned_user_name}</Badge>
          ) : (
            <Badge>Not Assigned</Badge>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default TaskOverview;
