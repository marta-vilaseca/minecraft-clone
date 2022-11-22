import { useStore } from '../hooks/useStore'
import { useState } from 'react'

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [
        state.saveWorld, 
        state.resetWorld
    ])
    const [areControlsVisible, setAreControlsVisible] = useState(false)

    const handleButtonClick = (e) => {
        e.stopPropagation();
        setAreControlsVisible(!areControlsVisible);
    }

    return (
        <div className="menu">
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    saveWorld();
                    window.location.reload();
                }}
            >
                Save
            </button>
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    resetWorld();
                }}
            >
                Reset
            </button>

            <button onClick={handleButtonClick}>
                Controls
            </button>

            {areControlsVisible && <div className='controls'>
                <ul>
                    <li><span>Up:</span> W</li>
                    <li><span>Down:</span> S</li>
                    <li><span>Left:</span> A</li>
                    <li><span>Right:</span> D</li>
                    <li><span>Jump:</span> Space</li>
                    <li><span>Run:</span> Shift</li>
                    <li><span>Add block:</span> Click</li>
                    <li><span>Remove Block:</span> Alt + Click</li>
                    <li><span>Pick Texture:</span> 1,2,3,4,5</li>
                </ul>
            </div>}
        </div>
    )
}