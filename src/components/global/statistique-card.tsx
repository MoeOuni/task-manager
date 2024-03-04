import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  title: string;
  value: string;
  unit?: string;
  icon?: React.ReactNode;
};

const StatistiqueCard = (props: Props) => {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{props?.title}</CardTitle>
        {props?.icon && props.icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {props?.value} <span className="text-muted-foreground text-sm">{props?.unit}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatistiqueCard;
