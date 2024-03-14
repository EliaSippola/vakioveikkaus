function countRows(compactRow, setRowAmount, update, forceUpdate) {
    let amount = 1;

    for (let i = 0; i < compactRow.length; i++) {
        if (compactRow[i] === "l" || compactRow[i] === "r" || compactRow[i] === "c") {
            amount *= 2;
        } else if (compactRow[i] === "a") {
            amount *= 3;
        }
    }

    setRowAmount(amount);
}

export default countRows;