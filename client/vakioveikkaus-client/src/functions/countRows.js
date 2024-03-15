function countRows(compactRow, setRowAmount) {
    let amount = 1;

    for (let i = 0; i < compactRow.length; i++) {
        if (compactRow[i] === "L" || compactRow[i] === "R" || compactRow[i] === "C") {
            amount *= 2;
        } else if (compactRow[i] === "A") {
            amount *= 3;
        }
    }

    setRowAmount(amount);

    return amount;
}

export default countRows;