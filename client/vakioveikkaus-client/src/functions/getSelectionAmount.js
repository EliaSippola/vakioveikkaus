// get amount of selections from rowamount
function getSelectionAmount(rowAmount) {

    let amount = 13;
    let threes = 0;
    let twos = 0;

    while(true) {
        if (rowAmount % 3 === 0) {
            rowAmount = rowAmount / 3;
            amount += 2;
            threes++;
        } else {
            break;
        }
    }

    while(true) {
        if (rowAmount % 2 === 0) {
            rowAmount = rowAmount / 2;
            amount += 1;
            twos++;
        } else {
            break;
        }
    }

    return [amount, threes, twos];
}

export default getSelectionAmount;