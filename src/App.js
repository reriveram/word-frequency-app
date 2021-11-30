import { useState } from "react";
import {wordCount} from "./utils/wordCount";
import { orderWordCount } from "./utils/orderWordCount";

const App = () => {
  const [textarea, setTextarea] = useState("Input text here");

  const updateTextarea = (event) => {
    setTextarea(event.target.value);
  };

  const countButtonHandler = (e) => {
    e.preventDefault();
    let arr = textarea.toString();
    arr = arr.split(" ")
    const wordcount = wordCount(arr);
    const finalArray = orderWordCount(wordcount);
    console.log(finalArray);
    
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
            value = {textarea}
            //onClick={updateTextInput}
          >
          </textarea>
          <button className="input-button" onClick={countButtonHandler}>
            Count words
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
