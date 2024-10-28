import React from "react";
type Props = {
  categories: string[];
  selected: string;
  handleClick: (category: string) => void;
};
export default function Categories({
  categories,
  selected,
  handleClick,
}: Props) {
  return (
    <ul className="flex gap-4 overflow-x-scroll whitespace-nowrap py-10">
      {categories.map((category) => (
        <li
          className={`${selected === category && "bg-sub hover:text-foreground"} cursor-pointer rounded-full px-4 py-1 hover:text-sub`}
          key={category}
        >
          <button onClick={() => handleClick(category)}>{category}</button>
        </li>
      ))}
    </ul>
  );
}
