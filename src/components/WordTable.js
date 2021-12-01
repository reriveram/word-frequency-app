import { Fragment } from "react";

const WordTable = (props) => {
  const orderedArray = props.orderedArray;
  console.log(orderedArray);

  return (
    <table>
      <thead>
        <tr className="table-header">
          <th className="table-body">Rank</th>
          <th className="table-body">Times</th>
          <th className="table-body">Word</th>
        </tr>
      </thead>
      <tbody>
        {orderedArray.map((element, i) => {
         return <tr key={i}>
            <td>{i+1}</td>
            <td>{element[1]}</td>
            <td>{element[0]}</td>
          </tr>;
        })}
      </tbody>
    </table>
    // <div>
    //   <ul>
    //     {orderedArray.map((word) => {
    //       return <li>{word}</li>;
    //     })}
    //   </ul>
    // </div>
  );
};

export default WordTable;
