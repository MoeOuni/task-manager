import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { XCircle } from "lucide-react";

export function TaskDetails() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size={"sm"}>
          View Details
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4 pb-0">
        <DrawerHeader>
          <DrawerTitle>Title</DrawerTitle>
          <DrawerDescription>Description.</DrawerDescription>
        </DrawerHeader>
        <div>
          <div className="flex items-center justify-center space-x-2"></div>
        </div>
        <DrawerFooter className="flex flex-col md:flex-row w-full">
          <Button>Complete</Button>
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
