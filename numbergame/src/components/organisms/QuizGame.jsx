import React, { useState, useEffect } from "react";
import BagsContainer from "../molecules/BagsContainer";
import CheckButton from "../molecules/CheckButton";
import ResetButton from "../molecules/ResetButton";
import Message from "../atoms/Message";
import OptionsContainer from "../molecules/OptionsContainer";

const QuizGame = () => {
  const [options, setOptions] = useState([]);
  const [bags, setBags] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedSource, setDraggedSource] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  useEffect(() => {
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    const randomNumbers = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 100)
    );
    setOptions(randomNumbers);
    setBags(Array(5).fill(null));
    setIsCorrect(false);
    setIsWrongAnswer(false);
  };

  const handleDragStart = (event, value, source, sourceIndex) => {
    setDraggedItem(value);
    setDraggedSource(source);
    setDraggedIndex(sourceIndex);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDropOption = (event, index) => {
    event.preventDefault();
    if (draggedItem !== null && draggedSource !== "options") {
      if (draggedSource === "buckets") {
        const updatedBags = [...bags];
        updatedBags[draggedIndex] = null;
        setBags(updatedBags);
      }

      if (options[index] === null || options[index] === 0) {
        const updatedOptions = [...options];
        updatedOptions[index] = draggedItem;
        setOptions(updatedOptions);
      } else {
        const updatedBags = [...bags];
        updatedBags.push(options[index]);
        const updatedOptions = [...options];
        updatedOptions[index] = draggedItem;
        setBags(updatedBags);
        setOptions(updatedOptions);
      }

      setDraggedItem(null);
      setDraggedSource(null);
      setDraggedIndex(null);
    }
  };

  const handleDropBucket = (event, index) => {
    event.preventDefault();
    if (draggedItem !== null && draggedSource !== "buckets") {
      if (draggedSource === "options") {
        const updatedOptions = [...options];
        updatedOptions[draggedIndex] = null;
        setOptions(updatedOptions);
      }

      if (bags[index] === null) {
        const updatedBags = [...bags];
        updatedBags[index] = draggedItem;
        setBags(updatedBags);
      } else {
        const updatedOptions = [...options];
        updatedOptions.push(bags[index]);
        const updatedBags = [...bags];
        updatedBags[index] = draggedItem;
        setOptions(updatedOptions);
        setBags(updatedBags);
      }

      setDraggedItem(null);
      setDraggedSource(null);
      setDraggedIndex(null);
    }
  };

  const handleCheckAnswers = () => {
    const sortedBuckets = [...bags].sort((a, b) => a - b);
    const isCorrect = JSON.stringify(bags) === JSON.stringify(sortedBuckets);
    setIsCorrect(isCorrect);
    setIsWrongAnswer(true);
  };

  const handleResetGame = () => {
    generateNumbers();
  };

  const isButtonDisabled = bags.includes(null);

  return (
    <div className="bg-[#f8d99f] text-white min-h-screen">
      <nav className="px-4  pt-32">
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="text-[#632626] font-bold text-6xl">Numbers Game</h1>
        </div>
      </nav>

      <div className="container mx-auto py-4">
        <p className="md:text-xl text-lg font-bold md:mb-10 md:mt-10 text-center  text-[#6b4444]">
          <span className="typewriter">
            Arrange the values (ascending order):
          </span>
        </p>

        <div className="flex flex-col gap-6 justify-center items-center">
          <BagsContainer
            bags={bags}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDropBucket={handleDropBucket}
          />
          <OptionsContainer
            options={options}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDropOption={handleDropOption}
          />

          <div className="flex flex-row ">
            <CheckButton
              handleCheckAnswers={handleCheckAnswers}
              isButtonDisabled={isButtonDisabled}
            />
            <ResetButton handleResetGame={handleResetGame} />
          </div>

          <Message
            type={
              isCorrect ? "correct" : isWrongAnswer ? "incorrect" : "incomplete"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
