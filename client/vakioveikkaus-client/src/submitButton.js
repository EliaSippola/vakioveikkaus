
function SubmitButton({ text, reFunc }){
        return (
            <div className="submitButton" onClick={reFunc}>{text}</div>
        )
}

export default SubmitButton;