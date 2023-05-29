**React Numbers Game**
This is a numbers game built using React.js that tests the user's sorting skills. The game provides the user with 5 random values that need to be sorted in ascending order. The user can drag and drop options from a set of 5 random values into input bags. After sorting the values, the user can check if their answer is correct or wrong.

**Features**

Generates 5 random values for sorting.
Allows the user to drag and drop options from the set of random values into input buckets.
Supports drag and drop functionality using HTML5 Drag and Drop API.
Validates the user's answer and displays whether it is correct or wrong.
Enables the check button of the form after filling all the inputs.
Provides an option to reset the game and try again with different random numbers.

**Installation**

Clone the repository:

git clone https://github.com/ronitrangwani/AssignmentBytelearn
Navigate to the project directory:

cd numbergame
Install the dependencies:

npm install
Start the development server:

npm start
The game should now be running on http://localhost:3000.

**Usage**

Once the game is running, you will see the 5 random values displayed on the screen.
Drag and drop the options from the set of random values into the input buckets to sort them.
After filling all the inputs, the check button will be enabled. Click on it to validate your answer.
The game will display whether your answer is correct or wrong.
To reset the game and try again with different random numbers, click on the reset button.

**Folder Structure - Atomic Design **

- components
  - atoms
    - Option.js
    - Bucket.js
    - Button.js
    - Message.js
  - molecules
    - OptionsContainer.js
    - BucketsContainer.js
    - CheckButton.js
    - ResetButton.js
  - organisms
    - QuizGame.js

**Message**
The Message component displays different types of messages based on the game state. It receives the type prop, which determines the type of message to be displayed. It conditionally renders the appropriate message based on the type, such as a correct answer message, incomplete answer message, or incorrect answer message.

**OptionsContainer**
The OptionsContainer component displays the options available for the quiz game. It receives the options state, handleDragStart, handleDragOver, and handleDropOption as props. It uses the map function to iterate over the options array and render each option as a draggable element. The drag and drop events are handled by the event handlers passed as props.

**BucketsContainer**
The BucketsContainer component displays the buckets where the options can be dropped. It receives the buckets state, handleDragStart, handleDragOver, and handleDropBucket as props. Similar to the OptionsContainer, it uses the map function to iterate over the buckets array and render each bucket as a droppable element. The drag and drop events are handled by the event handlers passed as props.

**CheckButton**
The CheckButton component represents the "Check" button in the quiz game. It receives the handleCheckAnswers function and isButtonDisabled flag as props. The button is rendered with appropriate styling, and the handleCheckAnswers function is called when the button is clicked. The isButtonDisabled flag determines whether the button is disabled or enabled based on the state of the buckets.

**ResetButton**
The ResetButton component represents the "Reset" button in the quiz game. It receives the handleResetGame function as a prop. The button is rendered with appropriate styling, and the handleResetGame function is called when the button is clicked.

**QuizGame**
The QuizGame component is the main component that represents the entire quiz game. It manages the state for options, buckets, isCorrect, showWrongAnswerMessage, draggedItem, draggedItemSource, and draggedItemSourceIndex. It also handles various event handlers such as generating random numbers, handling drag and drop events, checking answers, and resetting the game. The JSX code inside the return statement defines the layout and structure of the quiz game UI.

**Technologies Used**
React.js
Tailwind CSS
HTML5 Drag and Drop API
