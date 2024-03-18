import SelectButton from './selectButton';
import SubmitButton from './submitButton';

function FilteredSelection({ selection, forceUpdate, filterAmount, setFilterAmount }) {

    let usedValues;

    if (usedValues == null) {   
        usedValues = selection;
    }

    function filterToSelection() {
        forceUpdate(3);
    }

    const setAmount = (e) => {
        setFilterAmount(e.target.value);
    }

    return (
        <div className='filterSelected'>
            <h3>filtered Selection</h3>
            {usedValues.map((val, i) => (
                <div key={i}>
                    <SelectButton val={1} className={val[0] === 1 ? "selButton-active" : "selButton"} id={0} parentKey={i} />
                    <SelectButton val={"x"} className={val[1] === 1 ? "selButton-active" : "selButton"} id={1} parentKey={i} />
                    <SelectButton val={2} className={val[2] === 1 ? "selButton-active" : "selButton"} id={2} parentKey={i} />
                </div>
                ))}
            <input type="number" className='setAmount' onChange={setAmount} value={filterAmount} min={1} name="lines" ></input>
            <SubmitButton text={"Select"} reFunc={filterToSelection} />
            <div>Rivien määrä Selectin vieressä. Huomaa, että rivimäärän tulee olla kahdella ja/tai kolmella jaollinen</div>
        </div>
    )
}

export default FilteredSelection;