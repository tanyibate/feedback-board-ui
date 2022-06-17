import React, { useState } from "react";
import Tag from "../../atoms/tag/Tag";

export type FilterProps = {
  filters: string[];
  filterFunction: (filter: string) => void;
};

export default function Filter({ filters, filterFunction }: FilterProps) {
  const [indexOfFilterSelected, setIndexOfFilterSelected] = useState(0);
  const select = (index: number, filter: string) => {
    setIndexOfFilterSelected(index);
    filterFunction(filter);
  };
  return (
    <div className="w-full h-52 p-8 flex flex-wrap justify-between gap-y-3 bg-white rounded-lg">
      {filters.map((filter, index) => {
        const selected = index === indexOfFilterSelected ? true : false;
        return (
          <Tag
            {...{
              key: filter,
              selected: selected,
              select: select,
              title: filter,
              index: index,
            }}
          />
        );
      })}
    </div>
  );
}
