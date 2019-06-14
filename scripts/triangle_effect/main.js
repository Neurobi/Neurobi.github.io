// Modify this line to change color properties of this effect
// for example, ['orange',70,30], ['red',50,3], ['violet',335,290]
colorconfig = [['blue',290,240]]

colorchosenStatus = {}
creationNode = {}
neighborConnectionData = {}
dynamicSvgTriangleSlide = document.getElementById('id_dynamic_svg')
triangleData = formPrism()
drawPrism()
dynamicSvgTriangleSlide.addEventListener('mouseover',giveColor);