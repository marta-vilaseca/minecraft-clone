import create from "zustand"
import { nanoid } from "nanoid"

export const useStore = create(set => ({
    texture: 'dirt',
    cubes: [
        {
            pos: [1,5,1],
            texture: 'log'
        }
    ],
    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...state.cubes, {
                id: nanoid(),
                texture: state.texture,
                pos: [x, y, z]
            }]
        }))
    },
    /* removeCube: (x, y, z) => {
        set(state => ({
            cubes: state.cubes.filter(cube => {
                const [X, Y, Z] = cube.pos
                return X !== x || Y !== y || Z !== z
            })
        }))
    }, */
    removeCube: (id) => {
        set(state => ({
            cubes: state.cubes.filter(cube => cube.id !== id)
        }))
    },
    setTexture: (texture) => {
        set(() => ({texture}))
    },
    saveWorld: () => {},
    resetWorld: () => {}
}))