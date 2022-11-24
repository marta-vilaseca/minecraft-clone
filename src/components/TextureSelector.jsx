import { useEffect, useState } from "react"
import { useStore } from "../hooks/useStore"
import { useKeyboard } from "../hooks/useKeyboard"
import { dirtImg, grassImg, glassImg, logImg, woodImg, blackImg, brickImg, stoneImg, redconcreteImg, whiteconcreteImg } from '../images/images'

const images = {
	dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	wood: woodImg,
	log: logImg,
    black: blackImg, 
    brick: brickImg, 
    stone: stoneImg, 
    redconcrete: redconcreteImg, 
    whiteconcrete: whiteconcreteImg
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore(state => [state.texture, state.setTexture])

    const {
        dirt,
        grass,
        glass,
        wood,
        log,
        black,
        brick,
        stone,
        redconcrete,
        whiteconcrete
    } = useKeyboard()

    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log,
            black,
            brick,
            stone,
            redconcrete,
            whiteconcrete
        }

        const selectedTexture = Object
            .entries(textures)
            .find(([k, v]) => v)

        if (selectedTexture) { 
            setTexture(selectedTexture[0])
        }

    }, [setTexture, dirt, grass, glass, log, wood, black, brick, stone, redconcrete, whiteconcrete])

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)

        setVisible(true)

        return () => {
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture])

    return (
        <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
            {
                Object
                  .entries(images)
                  .map(([imgKey, img]) => {
                    return (
                        <img 
                            className={activeTexture === imgKey.replace('Img', '') ? 'selected' : ''}
                            key={imgKey}
                            src={img}
                            alt={imgKey}
                            /* onClick={() => setTexture(imgKey)} */
                        />
                    )
                })
            }
        </div>
    )

}