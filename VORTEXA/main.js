import { uiManager } from "../Vortexa/utils/UIManager.js"
import { load } from "./utils/loader.js"
import k from "./src/k.js"

load.resources()
load.fonts()

const scenes = {
    menu:()=>{
        uiManager.displayMenu()
    },
    1:()=>{
        
    },
    gameover:()=>{

    },
    end:()=>{

    }

}

for (const key in scenes){
    scene(key, scenes[key])
}

go ("menu")