import { useEffect, useState } from 'react';
import './App.css';
import Generated from './Generated';
import Selected from './Selected';
import Weighs from './Weighs';
import generateRows from './functions/generateRows';
import filterRows from './functions/filterRows';
import Filtered from './Filtered';
import FilteredSelection from './FilteredSelection';
import filterSelection from './functions/filterSelection';

function App() {

  const defaultSelection = [
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0],
    [1,0,0]
  ]

  const defaultWeighs = [
    [80, 12, 8],
    [21, 23, 56],
    [38, 30, 32],
    [25, 26, 49],
    [62, 22, 16],
    [74, 15, 12],
    [76, 13, 11],
    [35, 29, 36],
    [44, 28, 28],
    [53, 24, 24],
    [30, 26, 45],
    [20, 26, 54],
    [50, 29, 21]
  ]

  const [compRow, setCompRow] = useState("0000000000000");
  const [selection, setSelection] = useState(defaultSelection);
  const [rows, setRows] = useState(null);
  const [rowAmount, setRowAmount] = useState(1);
  const [update, forceUpdate] = useState(0);
  const [weighs, setWeighs] = useState(defaultWeighs);
  const [filterAmount, setFilterAmount] = useState(128);
  const [filteredRows, setFilteredRows] = useState(null);
  const [filteredSelection, setFilteredSelection] = useState(defaultSelection);
  const [filteredSelectionRowAmount, setFilteredSelectionRowAmount] = useState(128);

  useEffect(() => {
  }, [update])

  if (update === 1) {
    generateRows(compRow, setRows, setRowAmount);
    forceUpdate(0);
  }

  if (update === 2) {
    filterRows(rows, weighs, filterAmount, setFilteredRows);
    forceUpdate(0);
  }

  if (update === 3) {
    filterSelection(filteredRows, setFilteredSelection, filteredSelectionRowAmount);
    forceUpdate(0);
  }

  return (
    <div className="App">
      <p>Vakioveikkaus rivien generointi ja filtterointi</p>
      <Selected setCompRow={setCompRow} selection={selection} setSelection={setSelection} forceUpdate={forceUpdate} />
      <Generated compRow={compRow} rowAmount={rowAmount} rows={rows} />
      <Weighs weighs={weighs} setWeighs={setWeighs} filterAmount={filterAmount} setFilterAmount={setFilterAmount} forceUpdate={forceUpdate} />
      <Filtered rowAmount={filterAmount} rows={filteredRows} />
      <FilteredSelection selection={filteredSelection} forceUpdate={forceUpdate} filterAmount={filteredSelectionRowAmount} setFilterAmount={setFilteredSelectionRowAmount} />
    </div>
  );
}

export default App;