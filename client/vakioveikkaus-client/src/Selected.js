import generateCompactRow from './functions/generateCompactRow';
import SelectButton from './selectButton';
import SubmitButton from './submitButton';

function Selected({ setCompRow, selection, setSelection, forceUpdate }) {

    const select = (elem) => {

        const parentKey = elem.currentTarget.getAttribute("data-key");
        const elemId = elem.currentTarget.getAttribute("data-id");

        if (elem.target.className === "selButton") {
            elem.target.className = "selButton-active";

            usedValues[parentKey][elemId] = 1;
        } else {
            elem.target.className = "selButton";

            usedValues[parentKey][elemId] = 0;
        }

    }

    let usedValues;

    if (usedValues == null) {   
        usedValues = selection;
    }

    function generateCompact() {
        generateCompactRow(usedValues, setSelection, setCompRow, forceUpdate);
    }

    return (
        <div className='selected'>
            <h3>selected</h3>
            {usedValues.map((val, i) => (
                <div key={i}>
                    <SelectButton val={1} reFunc={select} className={val[0] === 1 ? "selButton-active" : "selButton"} id={0} parentKey={i} />
                    <SelectButton val={"x"} reFunc={select} className={val[1] === 1 ? "selButton-active" : "selButton"} id={1} parentKey={i} />
                    <SelectButton val={2} reFunc={select} className={val[2] === 1 ? "selButton-active" : "selButton"} id={2} parentKey={i} />
                </div>
            ))}
            <SubmitButton text={"Generate"} reFunc={generateCompact} />
        </div>
    )
}

export default Selected;