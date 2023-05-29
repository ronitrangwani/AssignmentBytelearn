import React from "react";

const Option = ({
  option,
  index,
  handleDragStart,
  handleDragOver,
  handleDropOption,
}) => {
  return (
    <div
      key={index}
      className="bg-[#CA965C] p-5 drop-shadow-xl	rounded cursor-move transform transition-all duration-200 hover:bg-[#b47769] hover:shadow-lg text-black font-bold"
      draggable="true"
      onDragStart={(event) => handleDragStart(event, option, "options", index)}
      onDragOver={handleDragOver}
      onDrop={(event) => handleDropOption(event, index)}
    >
      <span className="pr-2 font-bold">&#9783; </span>
      {option}
    </div>
  );
};

export default Option;
