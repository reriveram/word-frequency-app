const WordList = () => {
  return (
    <table className='word-table'>
      <thead>
        <tr className='table-header'>
          <th className='table-body'>Rank</th>
          <th className='table-body'>Word</th>
          <th className='table-body'>Times</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td className='table-body'>1</td>
            <td className='table-body'>Hi</td>
            <td className='table-body'>2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WordList;
