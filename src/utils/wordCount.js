export const wordCount = (arr) => {
  const words = [...arr];
  const wordCountArray = [];
  const set = new Set(words);
  const uniqueWords = Array.from(set);

  uniqueWords.forEach((word) => {
    let counter = 0;
    words.forEach((w) => {
      if (w === word) {
        counter++;
      }
    });
    wordCountArray.push({ word: `${word}`, times: counter });
  });
  return wordCountArray;
};
