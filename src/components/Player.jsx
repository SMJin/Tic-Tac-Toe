import { useState } from "react"

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    const handleNameChange = (event) => {
        setPlayerName(event.target.value)
    }

    const handleEditClick = () => {
        // setIsEditing(!isEditing) // this not garentee always current value.
        setIsEditing(prev => !prev); // instead, use this case.
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = (
            <input type="text" 
                value={playerName} 
                onChange={handleNameChange} 
                onKeyDown={(event) => {event.key === 'Enter' && handleEditClick()}}
                required 
            />
        );
    }

    return (
        <li className={isActive ? 'active' : null} >
            <span className='player'>
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button 
                onClick={handleEditClick}
            >
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    )
}