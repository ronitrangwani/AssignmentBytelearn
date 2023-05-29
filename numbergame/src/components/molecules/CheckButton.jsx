import React from "react";
import Button from "../atoms/Button";

const CheckButton = ({ handleCheckAnswers, isButtonDisabled }) => {
  return (
    <Button
      cName="bg-green-700 hover:bg-green-500 px-4 py-2 text-white rounded mr-2 disabled:bg-black-200 disabled:cursor-not-allowed transition-all duration-300"
      text="Check Answer"
      onClick={handleCheckAnswers}
      disabled={isButtonDisabled}
    />
  );
};

export default CheckButton;
