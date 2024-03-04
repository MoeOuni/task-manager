import React from "react";
import { Input } from "../ui/input";
import { MultiSelectFilter } from "./multi-select-filter";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  title?: string;
  disabled?: boolean;
  filterOptions?: {
    title: string;
    options: 
      {
        label: string;
        value: string;
      }[]
    ;
  }[];
};

const SearchFilters = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input className="md:w-[240px]" placeholder={`Search ${props?.title}`} />
      <div className="flex gap-4">
        {props?.filterOptions?.map((filter) => (
          <MultiSelectFilter {...filter} />
        ))}
        <Button disabled={props.disabled} variant="outline" className="d-flex gap-2">
          <Search size={18} /> Apply
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
