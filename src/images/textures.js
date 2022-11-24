import { 
    grassImg,
    dirtImg,
    logImg,
    glassImg,
    woodImg,
    blackImg,
    brickImg,
    redconcreteImg,
    stoneImg,
    whiteconcreteImg 
} from "./images";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three"

const groundTexture = new TextureLoader().load(grassImg)
const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const blackTexture = new TextureLoader().load(blackImg)
const brickTexture = new TextureLoader().load(brickImg)
const redconcreteTexture = new TextureLoader().load(redconcreteImg)
const stoneTexture = new TextureLoader().load(stoneImg)
const whiteconcreteTexture = new TextureLoader().load(whiteconcreteImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

groundTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
blackTexture.magFilter = NearestFilter
brickTexture.magFilter = NearestFilter
redconcreteTexture.magFilter = NearestFilter
stoneTexture.magFilter = NearestFilter
whiteconcreteTexture.magFilter = NearestFilter

export { 
    groundTexture,
    grassTexture,
    dirtTexture,
    logTexture,
    glassTexture,
    woodTexture,
    blackTexture,
    brickTexture,
    redconcreteTexture,
    stoneTexture,
    whiteconcreteTexture
}