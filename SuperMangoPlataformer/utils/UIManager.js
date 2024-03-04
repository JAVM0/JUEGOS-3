class UIManager {
    
    displayBlinkingUIMessage(content, position){
        const message = add([
            text(content,{
                size: 24,
                font: "round", 
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up",["flash-up", "flash-down"])
        ])

        message.onStateEnter("flash-up", async()=>{
            await tween (
                message.opacity,
                0,
                0.5,
                (opacity)=>message.opacity = opacity,
                easings.linear 
            )
            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async()=>{
            await tween (
                message.opacity,
                1,
                0.5,
                (opacity)=>message.opacity = opacity,
                easings.linear 
            )
            message.enterState("flash-up")
        })
    }
    
    displayMenu(){
        add([
            sprite("forest-background"),
            scale(4)
        ])

        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200),
            scale(8)
        ])

        this.displayBlinkingUIMessage(
            "press [ Enter ] to start the Game",
            vec2(center().x,center().y+100)
        )

        onKeyPress("enter",()=>{
            play("confirm-ui",{
                speed: 1.5,
            })
            go("controls")
        })
    }

    displayControlsMenu(){
        add([
            sprite("forest-background"),
            scale(4)
        ])

        add([
            text("Controls",{
                font:"Round",
                size:50
            }),
            area(),
            anchor("center"),
            pos(center().x,center().y-200),
        ])

        const controlPrompts = add([
            pos(center().x+30, center().y)
        ])

        controlPrompts.add([
            sprite("up"),
            pos(20,-80),
            scale(4)
        ])
        controlPrompts.add([
            sprite("down"),
            pos(20,-20),
            scale(4)
        ])
        controlPrompts.add([
            sprite("left"),
            pos(-40,-20),
            scale(4)
        ])
        controlPrompts.add([
            sprite("right"),
            pos(80,-20),
            scale(4)
        ])
        controlPrompts.add([
            sprite("space"),
            pos(-200,-35)
        ])
        controlPrompts.add([
            text("Saltar"),
            ({font:"Round", size: 32}),
            pos(-215,100)

        ])
        controlPrompts.add([
            text("Movimiento"),
            ({font:"Round", size:32}),
            pos(-50,100)
        ])

        this.displayBlinkingUIMessage(
            "Press [ Enter ] to Start the Game",
            vec2(center().x,center().y+300)
        )

        onKeyPress("enter", ()=>{
            play("confirm-ui",{speed:1.5}),
            go(1)
        })
    }

}

export const uiManager = new UIManager()