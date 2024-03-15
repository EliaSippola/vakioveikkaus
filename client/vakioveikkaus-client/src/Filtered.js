function Filtered({ rowAmount, rows }) {

    if (rows === null) {
        rows = ["no rows", ""];
    }

    return (
        <div className="generated">
            <h3>Filtered values</h3>
            <div className="gen-list">
                <br />
                <div>Rows: {rowAmount}</div>
                <div className="generatedRows">
                    <div>filtered rows:</div>
                    {rows.map((data, i) => (
                        <div key={i} className="row">
                            <div>{`${i+1} - > ` + data}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filtered;