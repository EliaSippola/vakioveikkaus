function filterRows(rows, weighs, filterAmount, setRows) {
    let weightList = [];

    if (rows == null || rows === undefined || rows[0] === undefined) {
        return;
    }

    // create a weight for all rows
    for (let i = 0; i < rows.length; i++) {

        // current weight
        let currWeight = 0;

        for (let j = 0; j < rows[i].length; j++) {
            switch(rows[i][j]) {
                case "1":
                    currWeight += weighs[j][0];
                    break;
                case "X":
                    currWeight += weighs[j][1];
                    break;
                case "2":
                    currWeight += weighs[j][2];
                    break;
                default:
                    break;
            }
        }

        weightList.push([currWeight, i]);
    }

    let sorted = weightList.sort((a, b) => {return b[0] - a[0]});

    let sortedWeightList = [];

    let amount;

    if (filterAmount > sorted.length) {
        amount = sorted.length;
    } else {
        amount = filterAmount;
    }

    for (let i = 0; i < amount; i++) {
        sortedWeightList.push(rows[sorted[i][1]]);
    }

    setRows(sortedWeightList);
}

export default filterRows;