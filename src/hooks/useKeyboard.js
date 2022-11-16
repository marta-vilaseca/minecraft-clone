import { useEffect, useState } from "react"

const ACTIONS_KEYBOARD_MAP = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'glass', 
    Digit3: 'grass',
    Digit4: 'log',
    Digit5: 'wood',
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        wood: false,
        log: false,
    })

    useEffect(() => {
        const handleKeyDown = e => {
            const {code} = e
            const action = ACTIONS_KEYBOARD_MAP[code]
            if (action) {
                setActions(prevActions => ({
                    ...prevActions,
                    [action]: true
                }))
            }
        }

        const handleKeyUp = e => {
            const {code} = e
            const action = ACTIONS_KEYBOARD_MAP[code]
            if (action) {
                setActions(prevActions => ({
                    ...prevActions,
                    [action]: false
                }))
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    return actions
}