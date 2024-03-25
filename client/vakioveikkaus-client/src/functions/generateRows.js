import countRows from "./countRows";

function generateRows( compRow, setRows, setRowAmount ) {

    let rowAmount = countRows(compRow, setRowAmount);

    let rows = new Array(rowAmount);

    // check if there is empty rows
    if (compRow.includes("0")) {
        rows.push("not all rows set!!");
        setRows(rows);
        return;
    }

    /*
    // exapmle row: 1x2lrca111111
    let def = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // split comprow to edit it
    compRow = compRow.split('');

    // index to where is solved
    let solveIndex = -1;

    // make default row that can be used to skip indexes
    for (let i = 0; i < compRow.length; i++) {
        if (compRow[i] === "1" || compRow[i] === "x" || compRow[i] === "2") {
            def[i] = compRow[i];

            if (solveIndex + 1 === i) {
                solveIndex = i;
            }
        }
    }

    console.log(def);

    // index where needs to be changed next
    let changeIndex = 0;

    // loop all possibilities
    for (let i = 0; i < rowAmount; i++) {
        for (let j = 0; j < compRow.length; i++) {
            switch(compRow[j]) {
                case "f":
                    break;
                case "1":
                    break;
                case "x":
                    break;
                case "2":
                    break;
                case "l":
                    switch(def[j]) {
                        case "0":
                            def[j] = "1";
                            break;
                        case "1":
                            def[j] = "2";
                            compRow[j] = "f";
                            break;
                        default:
                            compRow[j] = "f";
                            break;
                    }
                    break;
                case "r":
                    switch(def[j]) {
                        case "0":
                            def[j] = ""
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
    }

    setRows(rows);
    */


    // generating rows

    // exapmle row: 1x2lrca111111
    // 1 = 1, x = x, 2 = 2, l = [1, x], r = [x, 2], c = [1, 2], a = [1, x, 2];

    // current row (encoding = 1 -> 1, 2 -> x, 3 -> 2)
    let def = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // next index to change
    let changeIndex = 12;

    // get default values form nonchanging indexes
    for (let i = 0; i < compRow.length; i++) {
        switch(compRow[i]) {
            case "1":
                def[i] = 1;
                break;
            case "X":
                def[i] = "X";
                break;
            case "2":
                def[i] = 2;
                break;
            case "L":
                def[i] = 1;
                break;
            case "R":
                def[i] = "X";
                break;
            case "C":
                def[i] = 1;
                break;
            case "A":
                def[i] = 1;
                break;
            default:
                break;
        }
    }

    rows[0] = def.join('');
        
    // loop all possibilities
    for (let i = 1; i < rowAmount; i++) {

        let j = 13;

        whileLoop:
        while (j--) {
            switch(compRow[changeIndex]) {
                case "1":
                    break;
                case "X":
                    break;
                case "2":
                    break;
                case "L":
                    switch(def[changeIndex]) {
                        case 1:
                            def[changeIndex] = "X";
                            break whileLoop;
                        case "X":
                            def[changeIndex] = 1;
                            break;
                        default:
                            break;
                    }
                    break;
                case "R":
                    switch(def[changeIndex]) {
                        case "X":
                            def[changeIndex] = 2;
                            break whileLoop;
                        case 2:
                            def[changeIndex] = "X";
                            break;
                        default:
                            break;
                    }
                    break;
                case "C":
                    switch(def[changeIndex]) {
                        case 1:
                            def[changeIndex] = 2;
                            break whileLoop;
                        case 2:
                            def[changeIndex] = 1;
                            break;
                        default:
                            break;
                    }
                    break;
                case "A":
                    switch(def[changeIndex]) {
                        case 1:
                            def[changeIndex] = "X";
                            break whileLoop;
                        case "X":
                            def[changeIndex] = 2;
                            break whileLoop;
                        case 2:
                            def[changeIndex] = 1;
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }

            changeIndex--;
        }

        changeIndex = 12;

        rows[i] = def.join('');
    }
    
    setRows(rows);
}

export default generateRows;