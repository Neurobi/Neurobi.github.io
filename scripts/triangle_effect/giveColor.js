function giveColor(event) {
    var bRect = dynamicSvgTriangleSlide.getBoundingClientRect();
    posX = event.clientX - bRect.left;
    posY = event.clientY - bRect.top;
    colorchoice = colorPick(posX,posY)
    event.target.style.fill = colorchoice
    event.target.style.stroke = colorchoice
    colorchosenStatus[event.target.id.toString()] = [1,colorPick(posX,posY)]
}