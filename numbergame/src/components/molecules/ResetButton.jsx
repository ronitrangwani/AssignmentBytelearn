import React from "react";
import Button from "../atoms/Button";

const ResetButton = ({ handleResetGame }) => {
  return (
    <Button
      cName="bg-red-600 hover:bg-red-500 text-black  px-4 py-2 text-white rounded mr-2 shadow-xl transition-all duration-300"
      text="Reset Answer"
      onClick={handleResetGame}
    />
  );
};

export default ResetButton;
