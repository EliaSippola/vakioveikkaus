function Generated({ compRow, rowAmount, rows }) {

    if (rows === null) {
        rows = ["no rows", ""];
    }

    return (
        <div className="generated">
            <h3>Generated values</h3>
            <div className="gen-list">
                <div>Compact row: {compRow}</div>
                <div>Rows: {rowAmount}</div>
                <div className="generatedRows">
                    <div>generated rows:</div>
                    {rows.map((data, i) => (
                        <div key={i}>{data}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Generated;