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

  const countButtonHandler = (event) => {
    event.preventDefault();
    if (textarea.trim() !== "") {
      let arr = textarea.toString();
      arr = arr.split(" ");
      const wordcount = wordCount(arr);
      const finalArray = orderWordCount(wordcount);
      const testArray = arrayConverter(finalArray);
      //console.log(testArray);
      setOrderedArray(testArray);
      setIsCounterTriggered(true);
    } else {
    }
  };

  return (
    <div className="App">
      <header>
        <h1>
          <span>Word</span> <span className="title__freq">Frequency</span>{" "}
          <span>App</span>
        </h1>
        <h3 className="subtitle">
          Let´s see how many words are in you´re text!{" "}
        </h3>
      </header>
      <form className="form">
        <textarea
          className="textarea"
          name="input-words"
          id="input-text"
          cols="30"
          rows="10"
          onChange={updateTextarea}
          value={textarea}
        ></textarea>
        {textarea.trim() !== "" && (
          <button className="button" onClick={countButtonHandler}>
            Count words
          </button>
        )}
      </form>
      <footer>
        {isCounterTriggered && <WordTable orderedArray={orderedArray} />}
      </footer>
    </div>
  );
};

export default App;
