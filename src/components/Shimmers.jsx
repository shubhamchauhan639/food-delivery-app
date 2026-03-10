import React from "react";

const Shimmer = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-[250px] rounded-xl bg-gray-200 animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;