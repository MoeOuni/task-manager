import { Task } from "@/types";
import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import dayjs from "dayjs";
import { Badge } from "../ui/badge";
import ExpandableText from "./expandable-text";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

const TaskCard = (props: Task) => {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-[16px]">
            #{props.id} {props?.title}
            <br/>
            <span className="text-black dark:text-white">Project: {props?.project_title}</span>
          </CardTitle>
          <CardDescription>
            <ExpandableText
              content={props?.description ?? ""}
              maxCharacters={255}
            />
          </CardDescription>
        </div>
        <div>
          <CardDescription className="flex flex-col">
            <span>
              Due Date: {dayjs(props?.dueDate).format("DD-MM-YYYY HH:mm")}
            </span>
            <span>
              Created At: {dayjs(props?.created_at).format("DD-MM-YYYY HH:mm")}
            </span>
            <span>
              Finished At: {props?.finished_at ? dayjs(props?.finished_at).format("DD-MM-YYYY HH:mm"): 'Not Finished'}
            </span>
          </CardDescription>
          {props?.assigned_user_id ? (
            <Badge>{props?.assigned_user_name}</Badge>
          ) : (
            <Badge>Not Assigned</Badge>
          )}
        </div>
      </CardHeader>
      <CardFooter>
        <Button size={'sm'}>
           <div className="flex gap-2 items-center"><CheckCircle size={16} />  Complet Task </div>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
