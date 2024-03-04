export class Level{
    drawBackground(bgSpriteName){
        add([sprite(bgSpriteName),fixed(),scale(4)])
    }
}