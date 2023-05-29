import React from "react";

const Bag = ({
  bag,
  index,
  handleDragStart,
  handleDragOver,
  handleDropBucket,
}) => {
  return (
    <div
      key={index}
      className={`bg-[#CBAF87] md:p-4 p-5  rounded cursor-move ${
        bag === null
          ? "border-2 border-dashed border-red-900"
          : " border-2 shadow-lg"
      } transform transition-all duration-300 hover:scale-105 text-black md:text-lg text-base drop-shadow-2xl border-black`}
      draggable="true"
      onDragStart={(event) => handleDragStart(event, bag, "bags", index)}
      onDragOver={handleDragOver}
      onDrop={(event) => handleDropBucket(event, index)}
    >
      {bag !== null ? bag : <span className="mr-2">⇓ {"Drop"}</span>}
    </div>
  );
};

export default Bag;
