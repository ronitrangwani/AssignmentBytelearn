import React from "react";
import Option from "../atoms/Option";

const OptionsContainer = ({
  options,
  handleDragStart,
  handleDragOver,
  handleDropOption,
}) => {
  return (
    <div className="flex flex-col ">
      <div className="md:text-lg text-base font-bold mb-2 text-black">
        Options:
      </div>
      <div className="space-x-3 flex flex-row border-2 rounded border-red-900 border-dashed px-2 py-2">
        {options.map((option, index) => (
          <Option
            key={index}
            option={option}
            index={index}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDropOption={handleDropOption}
          />
        ))}
      </div>
    </div>
  );
};

export default OptionsContainer;
