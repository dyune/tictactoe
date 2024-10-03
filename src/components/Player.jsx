import {useState} from "react";
export default function Player({initName, symbol, isTurn}) {

    const [editState, setEditState] = useState(false);
    const [currName, setCurrName] = useState(initName);

    function updateField(event) {
        setCurrName(event.target.value)
    }
    function editToggle() {
        setEditState((value) => !value);
    }

    let editSaveToggle;
    let playerNamespace;

    if (!editState) {
        editSaveToggle = "Edit"
        playerNamespace = <span className="player-name">{currName}</span>
    }
    if (editState) {
        editSaveToggle = "Save"
        playerNamespace = <input type="text" required value={currName} onChange={updateField}/>
    }

    return (
        <li className={isTurn ? 'active' : undefined}>
            <span className="player">
                {playerNamespace}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editToggle}>{editSaveToggle}</button>
        </li>
    )
}