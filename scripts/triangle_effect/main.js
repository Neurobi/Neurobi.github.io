window.colorchosenStatus = {}
window.creationNode = {}
window.neighborConnectionData = {}
window.dynamicSvgTriangleSlide = document.getElementById('dynamicSvgTriangleSlide')
window.triangleData = formPrism()
drawPrism()
dynamicSvgTriangleSlide.addEventListener('mouseover',giveColor)