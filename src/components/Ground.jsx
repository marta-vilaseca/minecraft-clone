import { usePlane } from '@react-three/cannon'
import { useStore } from '../hooks/useStore'
import { groundTexture } from '../images/textures'

export function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0]
    }))

    const [addCube] = useStore(state => [state.addCube])

    groundTexture.repeat.set(100,100)

    const handleClickGround = e => {
        e.stopPropagation()
        const [x, y, z] = Object.values(e.point).map(n => Math.ceil(n))
        addCube(x, y, z)
    }

    return (
        <mesh 
            onClick={handleClickGround}
            ref={ref}   
        >      
           <planeBufferGeometry attach="geometry" args={[100, 100]} />
           <meshStandardMaterial attach="material" map={groundTexture} />
        </mesh>
    )
}