import React from "react";
import { FilterInput, FilterSelect } from "../../entities";

const dataArr = ["1", "2", "3"];
const styleArr = ["bar", "mod", "3"];
export function Filter() {
  return (
    <div className="m-auto rounded-lg w-3/4 h-20 flex items-center px-5 bg-white shadow-lg">
      <form action="" className="w-full flex items-center justify-between">
        <FilterSelect optionArr={dataArr} placeholder="По дате" />
        <FilterInput />
        <FilterSelect optionArr={styleArr} placeholder="По стилю" />
      </form>
    </div>
  );
}
