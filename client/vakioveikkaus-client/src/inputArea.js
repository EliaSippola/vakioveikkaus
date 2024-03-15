function InputArea({ val, reFunc, keyId, valId }) {

    return (
        <input type="number" className="inputArea" defaultValue={val} onChange={reFunc} data-key={keyId} data-val={valId} ></input>
    )
}

export default InputArea;