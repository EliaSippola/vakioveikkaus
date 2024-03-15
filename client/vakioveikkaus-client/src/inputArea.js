function InputArea({ val, reFunc, keyId }) {

    return (
        <input type="number" className="inputArea" defaultValue={val} onChange={reFunc} data-key={keyId} data-val={val} ></input>
    )
}

export default InputArea;