import { useStore } from '../hooks/useStore'

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [
        state.saveWorld, 
        state.resetWorld
    ])

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
        </div>
    )
}