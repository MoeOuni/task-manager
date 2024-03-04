import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const CardSkeleton = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center gap-2">
       
            <Skeleton className="w-[120px] h-4" />
      
          <CardTitle className="w-full">
            <Skeleton className="w-full h-8" />
          </CardTitle>
        </div>
        <div className="flex flex-row gap-4">
          <Skeleton className="w-[180px] h-4" />
          <Skeleton className="w-[120px] h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-4 my-4" />
        <Skeleton className="w-[80%] h-4 my-4" />
        <Skeleton className="w-[90%] h-4 my-4" />
        <Skeleton className="w-[50%] h-4 my-4" />
      </CardContent>
      <CardFooter className="flex gap-3">
        <Skeleton className="w-[180px] h-9" />
        <Skeleton className="w-[120px] h-9" />
      </CardFooter>
    </Card>
  );
};

export default CardSkeleton;
