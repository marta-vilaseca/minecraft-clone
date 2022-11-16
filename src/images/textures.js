import { 
    grassImg,
    dirtImg,
    logImg,
    glassImg,
    woodImg
} from "./images";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three"

const groundTexture = new TextureLoader().load(grassImg)
const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)

// Ground Texture
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter

// Grass Texture
grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping
grassTexture.magFilter = NearestFilter

// Dirt Texture
dirtTexture.wrapS = RepeatWrapping
dirtTexture.wrapT = RepeatWrapping
dirtTexture.magFilter = NearestFilter

// Log Texture
logTexture.magFilter = NearestFilter

// GlassTexture
glassTexture.magFilter = NearestFilter

// WoodTexture
woodTexture.magFilter = NearestFilter

export { 
    groundTexture,
    grassTexture,
    dirtTexture,
    logTexture,
    glassTexture,
    woodTexture
}