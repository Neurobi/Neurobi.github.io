function drawPrism() {
    let colorchoices = ['rgba(0,0,0,0.3)']

    for (i=0; i<triangleData.length; i++) {
        let ithTriangleSet = triangleData[i]
        let polyElement = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        let polypoints = ithTriangleSet[0][0] + ',' +ithTriangleSet[0][1] + ' ' + ithTriangleSet[1][0] + ',' + ithTriangleSet[1][1] + ' ' + ithTriangleSet[2][0] + ',' + ithTriangleSet[2][1]
        polyElement.setAttribute('points',polypoints);
        polyElement.setAttribute('id','triangleNo' + i);
        polyElement.style.fill = colorchoices[0];
        polyElement.style.strokeWidth = '0.05%';
        polyElement.style.stroke = 'rgba(255,255,255,0.3)';
        dynamicSvgTriangleSlide.appendChild(polyElement);
    }
}