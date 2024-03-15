import InputArea from './inputArea';
import SubmitButton from './submitButton';

function Weighs({ weighs, setWeighs }) {

    const changeVal = (elem) => {
        const key = elem.currentTarget.getAttribute("data-key");
        const value = elem.currentTarget.getAttribute("data-val");

        usedWeighs[key][value] = elem.target.value;
    }

    function filterRows() {

    }

    function setAmount() {
        
    }

    let usedWeighs;

    if (usedWeighs == null) {
        usedWeighs = weighs;
    }

    return (
        <div className="weighs">
            <h3>Weighs</h3>
            {usedWeighs.map((val, i) => (
                <div key={i}>
                    <InputArea val={val[0]} reFunc={changeVal} keyId={i} />
                    <InputArea val={val[1]} reFunc={changeVal} keyId={i} />
                    <InputArea val={val[2]} reFunc={changeVal} keyId={i} />
                </div>
            ))}
            <input type="number" className='setAmount' onClick={setAmount} defaultValue={128} ></input>
            <SubmitButton text={"Filter"} reFunc={filterRows} />
        </div>
    )
}

export default Weighs;