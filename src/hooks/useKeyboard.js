import { useEffect, useState } from 'react'

const ACTIONS_KEYBOARD_MAP = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Space: 'jump',
  ShiftLeft: 'shift',
  Digit1: 'dirt',
  Digit2: 'grass',
  Digit3: 'glass',
  Digit4: 'wood',
  Digit5: 'log',
  Digit6: 'black',
  Digit7: 'brick',
  Digit8: 'stone',
  Digit9: 'redconcrete',
  Digit0: 'whiteconcrete'
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    shift: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
    black: false,
    brick: false,
    stone: false,
    redconcrete: false,
    whiteconcrete: false,
  })

  useEffect(() => {
    const handleKeyDown = event => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]

      if (action) {
        // if (actions[action]) return

        setActions(prevActions => ({
          ...prevActions,
          [action]: true
        }))
      }
    }

    const handleKeyUp = event => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]

      if (action) {
        // if (!actions[action]) return

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