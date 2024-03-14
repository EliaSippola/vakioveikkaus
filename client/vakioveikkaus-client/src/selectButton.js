function SelectButton({ val, reFunc, className, id, parentKey }) {

    return (
        <div className={className} onClick={reFunc} data-key={parentKey} data-id={id} >{val}</div>
    )
}

export default SelectButton;