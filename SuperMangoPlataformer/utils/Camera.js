export function attachCamera(attachedObj, offsetX, fixedY){
    onUpdate(()=>{
        camPos(attachedObj + offsetX, fixedY)
    })
}

