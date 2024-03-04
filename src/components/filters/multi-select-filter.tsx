import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "../ui/checkbox";
import { CircleFadingPlus } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { CardDescription } from "../ui/card";

type Props = {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
};

export function MultiSelectFilter(props: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex gap-3">
          <CircleFadingPlus size={18} />
          {props?.title}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <CardDescription className="mb-2">Filter by {props?.title} :</CardDescription>
        <ScrollArea className="h-52 w-70 px-4 rounded-md border">
          {props.options.map((option) => (
            <div className="flex gap-2 my-2 items-center">
              <Checkbox value={option?.value} /> <Label>{option?.label}</Label>
            </div>
          ))}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
