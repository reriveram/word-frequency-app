import WordElement from "./WordElement";
import classes from "./WordTable.module.css";

const WordTable = (props) => {
  const orderedArray = props.orderedArray;

  return (
    <table className={classes.table}>
      <thead className={classes.title}>
        <tr className={classes.tableRow}>
          <th className={classes.tableHeads}>Rank</th>
          <th className={classes.tableHeads}>Times</th>
          <th className={classes.tableHeads}>Word</th>
        </tr>
      </thead>
      <tbody>
        {orderedArray.map((element, i) => {
          return (
            <WordElement
              key={i}
              index={i + 1}
              times={element[1]}
              word={element[0]}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default WordTable;
