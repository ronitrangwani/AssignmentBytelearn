import React from "react";

const Message = ({ type }) => {
  let message = "";

  if (type === "correct") {
    message = (
      <div className="bg-[#212121] rounded-xl w-fit p-3 py-3 mt-4">
        <p className="toast text-green-500 font-bold text-center  ">
          <span className="mr-2">&#10003;</span>Hurray !! Correct answer.
        </p>
      </div>
    );
  } else if (type === "incomplete") {
    message = (
      <div className="bg-[#212121] rounded-xl w-fit p-3 py-3 mt-4">
        <p className=" toast text-yellow-500 font-bold text-center 	">
          <span className="mr-2">&#9888;</span>Please complete your quiz.
        </p>
      </div>
    );
  } else if (type === "incorrect") {
    message = (
      <div className="bg-[#212121] rounded-xl w-fit p-3 py-3 mt-4">
        <p className="toast text-red-500 font-bold text-center">
          <span className="mr-2">&#10007;</span>Better luck next time.
        </p>
      </div>
    );
  }

  return message;
};

export default Message;
