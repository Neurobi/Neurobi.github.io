function drawPrism() {
    colorchoices = ['rgba(0,0,0,0.3)']

    for (i=0; i<triangleData.length; i++) {
        ithTriangleSet = triangleData[i]
        var polyElement = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        polypoints = ithTriangleSet[0][0] + ',' +ithTriangleSet[0][1] + ' ' + ithTriangleSet[1][0] + ',' + ithTriangleSet[1][1] + ' ' + ithTriangleSet[2][0] + ',' + ithTriangleSet[2][1]
        polyElement.setAttribute('points',polypoints);
        polyElement.setAttribute('id','triangleNo' + i);
        polyElement.style.fill = colorchoices[parseInt(Math.random()*(colorchoices.length))];
        polyElement.style.strokeWidth = '0.05%';
        polyElement.style.stroke = 'rgba(255,255,255,0.3)';
        dynamicSvgTriangleSlide.appendChild(polyElement);
    }
}