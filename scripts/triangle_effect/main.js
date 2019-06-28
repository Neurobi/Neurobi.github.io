window.colorchosenStatus = {}
window.creationNode = {}
window.neighborConnectionData = {}
window.dynamicSvgTriangleSlide = document.getElementById('id_dynamic_svg')
window.triangleData = formPrism()
drawPrism()
dynamicSvgTriangleSlide.addEventListener('mouseover',giveColor)
