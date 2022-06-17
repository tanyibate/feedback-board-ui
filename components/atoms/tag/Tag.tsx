import React from "react";
import classnames from "classnames";

export type TagProps = {
  selected: boolean;
  title: string;
  index: number;
  select: (index: number, title: string) => void;
};

export default function Tag({ selected, index, select, title }: TagProps) {
  const bgColor = classnames({
    ["bg-royal-blue text-white"]: selected,
    ["bg-zircon-gray text-royal-blue"]: !selected,
  });
  return (
    <span
      onClick={() => select(index, title)}
      className={`${bgColor} h-8 flex justify-center items-center px-5 rounded-lg cursor-pointer font-bold`}
    >
      {title}
    </span>
  );
}
