import * as React from "react";
import { Badge } from "../ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Project } from "@/types";
import { ArrowDownToLine, ListCollapse, XCircle } from "lucide-react";
import {
  getReadableCategory,
  getReadableStatus,
  getStatusClasses,
} from "@/lib/utils";
import dayjs from "dayjs";
import { Label } from "../ui/label";

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

type ExtendedProject = Project & {
  projectCategories: { label: string; value: string }[];
};

export function ProjectDetails(props: ExtendedProject) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={"sm"} variant="outline">
          <div className="flex items-center gap-2">
            {" "}
            <ListCollapse size={16}/> View Details
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{props?.title}</DrawerTitle>
        </DrawerHeader>
        <div className="w-full">
          <div className="px-4 pb-0">
            <p className="pb-2 text-gray-400 text-sm">
              Last Update: {dayjs(props?.createdAt).format("DD-MM-YYYY HH:mm")}
            </p>
            <p className="pb-2 text-gray-400 text-sm">
              Start At:{" "}
              {props?.startedAt
                ? dayjs(props?.startedAt).format("DD-MM-YYYY HH:mm")
                : "Not Set"}
            </p>
            <p className="pb-2 text-gray-400 text-sm">
              Completed At:{" "}
              {props?.completedAt
                ? dayjs(props?.completedAt).format("DD-MM-YYYY HH:mm")
                : "Not Set"}
            </p>
            <p className="pb-2 text-gray-400 text-sm">
              Category:{" "}
              <Badge>
                {getReadableCategory(props?.category, props?.projectCategories)}
              </Badge>
            </p>
            <p className="pb-2 text-gray-400 text-sm">
              Status:{" "}
              <Badge className={getStatusClasses(props?.status)}>
                {getReadableStatus(props?.status)}
              </Badge>
            </p>
            <p className="whitespace-pre-wrap text-sm pb-2">
              {props?.description}
            </p>
            <Label className="text-gray-400">
              Document(s):
              <div className="flex flex-col gap-2 mt-3">
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
            </Label>
          </div>
        </div>
        <DrawerFooter className="flex flex-col md:flex-row w-full">
          {props?.status === "AVAILABLE" && <Button>Send A Proposition</Button>}
          <DrawerClose asChild>
            <Button variant="outline" className="flex gap-2">
              <XCircle size={18} /> Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
