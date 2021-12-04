import classes from './WordElement.module.css';

const WordElement = (props) => {
  return (
    <tr>
      <td className={classes.rank}>{props.index}</td>
      <td className={classes.times}>{props.times}</td>
      <td className={classes.word}>{props.word}</td>
    </tr>
  );
};

export default WordElement;
