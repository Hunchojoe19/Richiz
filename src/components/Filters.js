import React from "react";
import Filter from "./Filter";

const Filters = () => {
  const sorting = [
    { title: "Rents" },
    { title: "Lands" },
    { title: "Houses" },
    { title: "Shortlets" },
  ];
  return (
    <div className="fixed w-full top-20 h-16 z-40 bg-white/[95%]">
      <div className="flex justify-start items-center gap-3 sm:gap-4  mt-4 cursor-pointer">
        {sorting.map((obj) => (
          <Filter title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
