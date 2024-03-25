import InputArea from './inputArea';
import SubmitButton from './submitButton';

function Weighs({ weighs, setWeighs, filterAmount, setFilterAmount, forceUpdate }) {

    const changeVal = (elem) => {
        const key = elem.currentTarget.getAttribute("data-key");
        const value = elem.currentTarget.getAttribute("data-val");

        weighs[key][value] = parseInt(elem.target.value);
        setWeighs([...weighs]);
    }

    const setAmount = (elem) => {
        setFilterAmount(elem.target.value);
    }

    function filterRows() {
        setWeighs(weighs);
        forceUpdate(2);
    }

    return (
        <div className="weighs">
            <h3>Selected weighs</h3>
            {weighs.map((val, i) => (
                <div key={i}>
                    <InputArea val={val[0]} reFunc={changeVal} keyId={i} valId={0} />
                    <InputArea val={val[1]} reFunc={changeVal} keyId={i} valId={1} />
                    <InputArea val={val[2]} reFunc={changeVal} keyId={i} valId={2} />
                </div>
            ))}
            <input type="number" className='setAmount' onChange={setAmount} value={filterAmount} name="lines" ></input>
            <SubmitButton text={"Filter"} reFunc={filterRows} />
            <div>Number of rows</div>
        </div>
    )
}

export default Weighs;