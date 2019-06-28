function formPrism() {
    let triangleData = []
    let currentlist = []
    let visitablenodes = []
    let averagedistance = 30
    let radiusdeviation = 20
    let angles = pickAngleInRange(360,[0,390],1)
    let currentvalue = [Math.random()*window.innerWidth, Math.random()*window.innerHeight]

    for (let j = 0; j < angles.length; j++) {
        let radius = averagedistance + (radiusdeviation*Math.random())
        let xvalue = currentvalue[0] + radius*Math.cos(angles[j]*Math.PI/180)
        let yvalue = currentvalue[1] + radius*Math.sin(angles[j]*Math.PI/180)
        if (inside([xvalue,yvalue],visitablenodes) === false) {
            window.creationNode[xvalue+','+yvalue] = currentvalue
            if (xvalue <= window.innerWidth*1.2 && xvalue >= -0.2*window.innerWidth && yvalue <= window.innerHeight*1.2 && yvalue >= -0.2*window.innerHeight) {
                visitablenodes.push([xvalue,yvalue])
            }
            currentlist.push([xvalue,yvalue])
        }
    }
    for (let k = 0; k < currentlist.length; k++) {
        neighbors = [currentlist[(((k-1) + currentlist.length) % currentlist.length) % currentlist.length]]
        neighbors.push(currentlist[(k + 1) % currentlist.length])
        neighborConnectionData[currentlist[k][0] + ',' + currentlist[k][1]] = neighbors
        triangleData.push([neighbors[0],currentlist[k],currentvalue])
    }
    ranges = []
    for (let m=0; m < visitablenodes.length;m++) {
        ranges.push(getPossibilityRange(visitablenodes[m], currentvalue)[0])
    }
    nextnode = visitablenodes[indexOfmin(ranges)]
    visitablenodes.splice(indexOfmin(ranges), 1)
    while(visitablenodes.length != 0) {
        currentlist = []
        prange = getPossibilityRange(nextnode, window.creationNode[nextnode[0]+','+nextnode[1]])
        currentvalue = nextnode
        angles = pickAngleInRange(prange[0],prange[1],prange[4])
        currneighbors = neighborConnectionData[currentvalue[0] + ',' + currentvalue[1]]
        for (let j = 0; j < angles.length; j++) {
            radius = averagedistance + (radiusdeviation*Math.random())
            xvalue = currentvalue[0] + radius*Math.cos(angles[j]*Math.PI/180)
            yvalue = currentvalue[1] + radius*Math.sin(angles[j]*Math.PI/180)
            if((inside([xvalue,yvalue],visitablenodes)) === false) {
                if (xvalue <= window.innerWidth*1.2 && xvalue >= -0.2*window.innerWidth && yvalue <= window.innerHeight*1.2 && yvalue >= -0.2*window.innerHeight) {
                    visitablenodes.push([xvalue,yvalue])
                }
                window.creationNode[xvalue+','+yvalue] = currentvalue
                currentlist.push([xvalue,yvalue])
            }
        }
        if(currentlist.length == 0) {
            for (let i = 0; i < 2; i++) {
                neighbors = neighborConnectionData[currneighbors[i][0] + ',' + currneighbors[i][1]]
                let j = (neighbors[0][0] == currentvalue[0] && neighbors[0][1] == currentvalue[1]) ? 0 : 1
                neighbors.splice(j, 1, currneighbors[Math.abs(i-1)])
            }
            triangleData.push([currneighbors[0],currneighbors[1],currentvalue])
        }
        else if (currentlist.length == 1) {
            neighborConnectionData[currentlist[0][0] + ',' + currentlist[0][1]] = currneighbors
            for (let i = 0; i < 2; i++) {
                let ngh = neighborConnectionData[currneighbors[i][0] + ',' + currneighbors[i][1]].slice()
                let j = (ngh[0][0] == currentvalue[0] && ngh[0][1] == currentvalue[1]) ? 0 : 1
                ngh.splice(j, 1, currentlist[0])
                neighborConnectionData[currneighbors[i][0] + ',' + currneighbors[i][1]] = ngh
                triangleData.push([currneighbors[i],currentlist[0],currentvalue])
            }
        }
        else {	
            for (let i = 0; i < 2; i++) {
                neighbors = [prange[i+2]]
                neighbors.push(currentlist[1 + i*(currentlist.length - 3)])
                neighborConnectionData[currentlist[i*(currentlist.length - 1)][0] + ',' + currentlist[i*(currentlist.length - 1)][1]] = neighbors
                let ngh = neighborConnectionData[prange[i+2][0] + ',' + prange[i+2][1]].slice()
                let j = (ngh[0][0] == currentvalue[0] && ngh[0][1] == currentvalue[1]) ? 0 : 1
                ngh.splice(j, 1, currentlist[i*(currentlist.length - 1)])
                neighborConnectionData[prange[i+2][0] + ',' + prange[i+2][1]] = ngh
                triangleData.push([prange[i+2],currentlist[i*(currentlist.length - 1)],currentvalue])
            }
            for (let k = 1; k < currentlist.length - 1; k++) {
                neighbors = [currentlist[(k - 1) % currentlist.length]]
                neighbors.push(currentlist[(k + 1) % currentlist.length])
                neighborConnectionData[currentlist[k][0] + ',' + currentlist[k][1]] = neighbors
                triangleData.push([neighbors[0],currentlist[k],currentvalue])
            }
            triangleData.push([currentlist[currentlist.length - 2], currentlist[currentlist.length - 1],currentvalue])
        }
        ranges = []
        for (let ind=0; ind < visitablenodes.length;ind++) {
            ranges.push(getPossibilityRange(visitablenodes[ind], window.creationNode[visitablenodes[ind][0]+','+visitablenodes[ind][1]])[0])
        }		
        nextnode = visitablenodes[indexOfmin(ranges)]
        visitablenodes.splice(indexOfmin(ranges), 1)
    }
    return triangleData
}