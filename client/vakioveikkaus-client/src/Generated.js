function Generated({ compRow, rowAmount, rows }) {

    if (rows === null) {
        rows = ["no rows"];
    }

    return (
        <div className="generated">
            <h3>Generated values</h3>
            <div className="gen-list">
                <div>Compact row: {compRow}</div>
                <div>0 = not set | 1 = 1 | X = x | 2 = 2 | L = 1x | R = x2 | C = 12 | A = 1x2</div>
                <div>Rows: {rowAmount}</div>
                <div className="generatedList">
                    <div>generated rows:</div>
                    {rows.map((data, i) => (
                        <div key={i} className="row">
                            {`${i+1} - > ` + data}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Generated;