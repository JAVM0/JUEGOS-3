import kaboom from 'https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs';
import { uiManager } from '../../game.js';

const k= kaboom({
    width: 1280,
    height: 720,
    letterbox: true
});

load.resources()

const scenes = {
    menu : () =>{
       uiManager.displayMainMenu()
    },
    controls: ()=>{

    },

    1:()=>{

    },

    2:()=>{
        
    },

    3:()=>{

    },

    gameover: ()=>{

    },

    endscene:()=>{

    }
}

for(const key in scenes){
    scene(key,scenes[key])
}

go("menu")

