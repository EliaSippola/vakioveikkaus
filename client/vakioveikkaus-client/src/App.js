import { useEffect, useState } from 'react';
import './App.css';
import Generated from './Generated';
import Selected from './Selected';
import Weighs from './Weighs';
import countRows from './functions/countRows';
import generateRows from './functions/generateRows';

function App() {

  const defaultSelection = [
    [1,0,0],
    [0,1,0],
    [0,0,1],
    [1,1,0],
    [0,1,1],
    [1,0,1],
    [1,1,1],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0]
]

  const [compRow, setCompRow] = useState("0000000000000");
  const [selection, setSelection] = useState(defaultSelection);
  const [rows, setRows] = useState(null);
  const [rowAmount, setRowAmount] = useState(1);
  const [update, forceUpdate] = useState(0);

  useEffect(() => {
    countRows(compRow, setRowAmount);
    forceUpdate(1);
  }, [compRow]);

  if (update === 1) {
    generateRows(compRow, setRows, rowAmount);
    forceUpdate(0);
  }

  return (
    <div className="App">
      <p>Vakioveikkaus rivien generointi</p>
      <Weighs />
      <Generated compRow={compRow} rowAmount={rowAmount} rows={rows} />
      <Selected setCompRow={setCompRow} selection={selection} setSelection={setSelection} />
    </div>
  );
}

export default App;
