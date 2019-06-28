function giveColor(event) {
    let bRect = dynamicSvgTriangleSlide.getBoundingClientRect();
    let posX = event.clientX - bRect.left;
    let posY = event.clientY - bRect.top;
    let colorchoice = colorPick(posX,posY)
    
    event.target.style.fill = colorchoice
    event.target.style.stroke = colorchoice
    colorchosenStatus[event.target.id.toString()] = [1,colorchoice]
}