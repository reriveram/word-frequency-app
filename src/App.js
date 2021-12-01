import { useState } from "react";
import { wordCount } from "./utils/wordCount";
import { orderWordCount } from "./utils/orderWordCount";
import { arrayConverter } from "./utils/arrayConverter";
import WordTable from "./components/WordTable";

const App = () => {
  const [textarea, setTextarea] = useState("Input text here");
  const [isCounterTriggered, setIsCounterTriggered] = useState(false);
  const [orderedArray, setOrderedArray] = useState([]);

  const updateTextarea = (event) => {
    setTextarea(event.target.value);
  };

  const countButtonHandler = (e) => {
    e.preventDefault();
    let arr = textarea.toString();
    arr = arr.split(" ");
    const wordcount = wordCount(arr);
    const finalArray = orderWordCount(wordcount);
    const testArray = arrayConverter(finalArray);
    //console.log(testArray);
    setOrderedArray(testArray);
    setIsCounterTriggered(true);
  };

  return (
    <div className="App">
      <h1 className="title">Word Frequency App!</h1>
      <h3 className="description">
        Let´s see how many words are in you´re text!{" "}
      </h3>
      <form className="input-form">
        <p className="input-label">Input text here:</p>
        <div className="input-div">
          {/* <input className="input-text" type="text" placeholder="Input you´re text here" required /> */}
          <textarea
            className="input-text"
            name="input-words"
            id="input-text"
            cols="30"
            rows="10"
            onChange={updateTextarea}
            value={textarea}
            //onClick={updateTextInput}
          ></textarea>
          <button className="input-button" onClick={countButtonHandler}>
            Count words
          </button>
        </div>
      </form>
      {isCounterTriggered && <WordTable orderedArray={orderedArray} />}
    </div>
  );
};

export default App;
