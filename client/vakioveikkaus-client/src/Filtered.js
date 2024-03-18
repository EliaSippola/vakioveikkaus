function Filtered({ rowAmount, rows }) {

    if (rows === null) {
        rows = ["no rows"];
    }

    return (
        <div className="filtered">
            <h3>Filtered values</h3>
            <div className="gen-list">
                <br />
                <br />
                <br />
                <div>Rows: {rowAmount}</div>
                <div className="filteredList">
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