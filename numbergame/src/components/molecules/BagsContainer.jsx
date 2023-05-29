import React from "react";
import Bag from "../atoms/Bag";

const BagsContainer = ({
  bags,
  handleDragStart,
  handleDragOver,
  handleDropBucket,
}) => {
  return (
    <div className="flex flex-col ">
      <h2 className="md:text-lg text-base font-bold mb-2 text-black">
        Correct the order of Values:
      </h2>
      <div className="space-x-3 flex flex-row">
        {bags.map((bag, index) => (
          <Bag
            key={index}
            bag={bag}
            index={index}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDropBucket={handleDropBucket}
          />
        ))}
      </div>
    </div>
  );
};

export default BagsContainer;
