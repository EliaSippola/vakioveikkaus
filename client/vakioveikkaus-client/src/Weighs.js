import InputArea from './inputArea';

function Weighs() {

    return (
        <div className="weighs">
            <h3>Weighs</h3>
            <div>
                <InputArea val={33} /><InputArea val={33} />
            </div>
        </div>
    )
}

export default Weighs;