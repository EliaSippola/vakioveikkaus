import InputArea from './inputArea';
import SubmitButton from './submitButton';

function Weighs({ weighs, setWeighs, filterAmount, setFilterAmount, forceUpdate }) {

    const changeVal = (elem) => {
        const key = elem.currentTarget.getAttribute("data-key");
        const value = elem.currentTarget.getAttribute("data-val");

        usedWeighs[key][value] = parseInt(elem.target.value);
    }

    const setAmount = (elem) => {
        setFilterAmount(elem.target.value);
    }

    function filterRows() {
        setWeighs(usedWeighs);
        forceUpdate(2);
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
                    <InputArea val={val[0]} reFunc={changeVal} keyId={i} valId={0} />
                    <InputArea val={val[1]} reFunc={changeVal} keyId={i} valId={1} />
                    <InputArea val={val[2]} reFunc={changeVal} keyId={i} valId={2} />
                </div>
            ))}
            <input type="number" className='setAmount' onChange={setAmount} value={filterAmount} name="lines" ></input>
            <SubmitButton text={"Filter"} reFunc={filterRows} />
            <div>Rivien määrä Filterin vieressä</div>
        </div>
    )
}

export default Weighs;