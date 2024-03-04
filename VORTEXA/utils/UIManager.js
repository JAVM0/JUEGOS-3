class UIManager{
    
    displayBlinkingUIMessage(content, position){
        const message = add([
            text(content,{
                size: 30,
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
            sprite("space-background"),
            scale(4)
        ])

        add([
            sprite("logo_Vortexa"),
            area(),
            anchor("center"),
            pos(center().x, center().y - 100),
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
            go("1")
        })
    }
}

export const uiManager = new UIManager()