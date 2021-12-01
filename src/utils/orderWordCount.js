export const orderWordCount = (arr) => {
    arr.sort((a, b) => {
      if (a.times < b.times) {
        return 1;
      }
      if (a.times > b.times) {
        return -1;
      }
      return 0;
    });
    return arr;
  };