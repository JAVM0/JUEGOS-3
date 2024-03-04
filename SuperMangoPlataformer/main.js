import kaboom from './libs/kaboom.mjs'
import { uiManager } from './utils/UIManager.js'
import { Level } from './utils/Level.js'
import { load } from './utils/loader.js'
import { level1Layout, level1Mappings } from './content/level1/level1Layout.js'
import { Player } from './entities/Player.js'
import {attachCamera} from './utils/camera.js'

kaboom ({
    width: 1280,
    height: 720,
    letterbox: true,
})

load.fonts()

load.sounds()

load.assets()

const scenes = {
    menu:() =>{
        uiManager.displayMenu()
     },
 
     controls:()=>{
        uiManager.displayControlsMenu()
     },
 
     1:()=>{

        setGravity(1400)

        const level1 = new Level()
        level1.drawBackground("forest-background")
        level1.drawMapLayout(level1Layout, level1Mappings)

        const player = new Player(1500, 100, 400, 650, 3,1 , false)

        attachCamera(player.gameObj, 0 , 200)

        level1.drawWaves("water","wave")
     },
 
     2:()=>{
         
     },
 
     3:()=>{
 
     },
 
     gameover: ()=>{
 
     },
 
     end:()=>{
 
     }
}

for (const key in scenes){
    scene (key, scenes[key])
}

go("menu")