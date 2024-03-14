function generateRows( compRow, setRows, rowAmount ) {
    let rows = [];

    // check if there is empty rows
    if (compRow.includes("0")) {
        rows.push("not all rows set!!");
        setRows(rows);
        return;
    }

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
}

export default generateRows;