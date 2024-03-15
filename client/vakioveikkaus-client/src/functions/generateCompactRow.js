 // generate compact row of all possibilities
 function generateCompactRow(usedValues, setSelection, setCompRow, forceUpdate) {

    setSelection(usedValues);

    let compRow = "0000000000000";

    compRow = compRow.split('');

    for (let i = 0; i < usedValues.length; i++) {
        if (usedValues[i][0] === 0 && usedValues[i][1] === 0 && usedValues[i][2] === 0) {
            compRow[i] = "0";
        } else if (usedValues[i][0] === 1 && usedValues[i][1] === 0 && usedValues[i][2] === 0) {
            compRow[i] = "1";
        } else if (usedValues[i][0] === 0 && usedValues[i][1] === 1 && usedValues[i][2] === 0) {
            compRow[i] = "X";
        } else if (usedValues[i][0] === 0 && usedValues[i][1] === 0 && usedValues[i][2] === 1) {
            compRow[i] = "2";
        } else if (usedValues[i][0] === 1 && usedValues[i][1] === 1 && usedValues[i][2] === 0) {
            compRow[i] = "L";
        } else if (usedValues[i][0] === 0 && usedValues[i][1] === 1 && usedValues[i][2] === 1) {
            compRow[i] = "R";
        } else if (usedValues[i][0] === 1 && usedValues[i][1] === 0 && usedValues[i][2] === 1) {
            compRow[i] = "C";
        } else if (usedValues[i][0] === 1 && usedValues[i][1] === 1 && usedValues[i][2] === 1) {
            compRow[i] = "A";
        }
    }

    compRow = compRow.join('');

    setCompRow(compRow);
    forceUpdate(1);
}

export default generateCompactRow;