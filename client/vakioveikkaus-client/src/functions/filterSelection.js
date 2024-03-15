import getSelectionAmount from "./getSelectionAmount";

function filterSelection( filteredRows, setFilteredSelection, rowAmount ) {

    if (filteredRows === null) {
        return;
    }

    let amounts = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    for (let i = 0; i < filteredRows.length; i++) {
        for (let j = 0; j < filteredRows[i].length; j++) {
            switch(filteredRows[i][j]) {
                case "1":
                    amounts[0][j] += 1;
                    break;
                case "X":
                    amounts[1][j] += 1;
                    break;
                case "2":
                    amounts[2][j] += 1;
                    break;
                default:
                    break;
            }
        }
    }

    let selection = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    // weight amounts
    let sortableList = [];

    // make array to sort amounts to highest
    // syntax -> [<amount>, <y>, <x>] (y and x in amounts array)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 13; j++) {
            sortableList.push([amounts[i][j], i, j]);
        }
    }

    let sorted = sortableList.sort((a, b) => {return b[0] - a[0]});

    // amount of selection points
    let res = getSelectionAmount(rowAmount);

    let maxSelectAmount = res[0];
    let threes = res[1];
    let twos = res[2];

    let selectAmount;
    if (maxSelectAmount > sorted.length) {
        selectAmount = sorted.length;
    } else {
        selectAmount = maxSelectAmount;
    }

    // duplicates
    let duplicates = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // possible threes
    let possibles = [];

    // set selection
    let limit = selectAmount;
    let i = 0;
    while (true) {

        if (duplicates[sorted[i][2]] === 0) {
            selection[sorted[i][2]][sorted[i][1]] = 1;
            duplicates[sorted[i][2]] += 1;
            i++;
        } else if (duplicates[sorted[i][2]] === 1 && twos > 0) {
            selection[sorted[i][2]][sorted[i][1]] = 1;
            duplicates[sorted[i][2]] += 1;
            i++;
            twos--;
        } else if (duplicates[sorted[i][2]] === 1 && threes > 0) {
                
            for (let j = 0; j < possibles.length; j++) {
                if (possibles[j][0] === sorted[i][2]) {
                    selection[possibles[j][0]][possibles[j][1]] = 1;
                    selection[sorted[i][2]][sorted[i][1]] = 1;
                    duplicates[sorted[i][2]] += 1;
                    threes++;
                }
            }

            possibles.push([sorted[i][2], sorted[i][1]])
            i++;

        } else if (duplicates[sorted[i][2]] === 2 && threes > 0) {
            for (let i = 0; i < possibles.length; i++) {
                if (possibles[i][0] === sorted[i][2]) {
                    selection[possibles[i][0]][possibles[i][1]] = 1;
                    selection[sorted[i][2]][sorted[i][1]] = 1;
                    duplicates[sorted[i][2]] += 1;
                    threes++;
                    twos--;
                }
            }
            i++;
        }
        else {
            i++;
            limit++;
        }

        if (i === limit) {
            break;
        }

        if (limit > sorted.length) {
            break;
        }
    }

    setFilteredSelection(selection);
}

export default filterSelection;