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
    <ul className="flex gap-2 overflow-x-scroll whitespace-nowrap py-10">
      {categories.map((category) => (
        <li
          className={`cursor-pointer rounded-full px-3 py-1 ${
            selected === category
              ? "bg-sub text-foreground" // selected 상태에서 hover를 적용하지 않음
              : "hover:text-sub"
          }`}
          key={category}
        >
          <button onClick={() => handleClick(category)}>{category}</button>
        </li>
      ))}
    </ul>
  );
}
