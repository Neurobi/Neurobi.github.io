function formPrism() {

    averagedistance = 30
    radiusdeviation = 20

    triangleData = []
    angles = pickAngleInRange(360,[0,390],1)
    initvalue = [Math.random()*window.innerWidth, Math.random()*window.innerHeight];
    currentvalue = initvalue
    pointsList = []
    pointsList.push[currentvalue]
    currentlist = []
    visitablenodes = []

    for (j = 0; j < angles.length; j++) {
        angle = angles[j]
        radius = averagedistance + (radiusdeviation*Math.random())

        xvalue = currentvalue[0] + radius*Math.cos(angle*Math.PI/180)
        yvalue = currentvalue[1] + radius*Math.sin(angle*Math.PI/180)

        if(inside([xvalue,yvalue],visitablenodes)) {
            console.log("Point Outside")
        }
        else {
            pointsList.push([xvalue,yvalue])
            creationNode[xvalue+','+yvalue] = currentvalue
            if (xvalue <= window.innerWidth*1.2 && xvalue >= -0.2*window.innerWidth && yvalue <= window.innerHeight*1.2 && yvalue >= -0.2*window.innerHeight) {
                visitablenodes.push([xvalue,yvalue])
            }
            currentlist.push([xvalue,yvalue])
        }
    }

    for (k = 0; k < currentlist.length; k++) {
        neighbors = []

        index = (k - 1)
        if (index < 0) {
            index = index + currentlist.length
        }
        if (index >= currentlist.length) {
            index = index % currentlist.length
        }
    
        neighbors.push(currentlist[index])
        index = (k + 1)
        if (index < 0) {
            index = index + currentlist.length
        }
        if (index >= currentlist.length) {
            index = index % currentlist.length
        }
        neighbors.push(currentlist[index])
        point = currentlist[k]
        neighborConnectionData[point[0] + ',' + point[1]] = neighbors
        triangleData.push([neighbors[0],point,currentvalue])
    }

    ranges = []
    for (m=0; m < visitablenodes.length;m++) {
        node = visitablenodes[m]
        ranges.push(getPossibilityRange(node, currentvalue)[0])
    }

    minvalueindex = indexOfmin(ranges)
    nextnode = visitablenodes[minvalueindex]
    visitablenodes.splice(minvalueindex, 1);

    while(visitablenodes.length != 0) {

        prange = getPossibilityRange(nextnode, creationNode[nextnode[0]+','+nextnode[1]])
        mainnodevalue = currentvalue
        currentvalue = nextnode

        angles = pickAngleInRange(prange[0],prange[1],prange[4])
        startingMneigh = prange[2]
        endingMneigh = prange[3]

        currentlist = []
        for (j = 0; j < angles.length; j++) {

            angle = angles[j]
            radius = averagedistance + (radiusdeviation*Math.random())

            xvalue = currentvalue[0] + radius*Math.cos(angle*Math.PI/180)
            yvalue = currentvalue[1] + radius*Math.sin(angle*Math.PI/180)

            if(inside([xvalue,yvalue],visitablenodes)) {
            }
            else {
                pointsList.push([xvalue,yvalue])
                creationNode[xvalue+','+yvalue] = currentvalue
                if (xvalue <= window.innerWidth*1.2 && xvalue >= -0.2*window.innerWidth && yvalue <= window.innerHeight*1.2 && yvalue >= -0.2*window.innerHeight) {
                    visitablenodes.push([xvalue,yvalue])
                }
                currentlist.push([xvalue,yvalue])
            }
        }

        if(currentlist.length == 0) {
            currneighbors = neighborConnectionData[currentvalue[0] + ',' + currentvalue[1]]
            n1 = currneighbors[0]
            n1neighbors = neighborConnectionData[n1[0] + ',' + n1[1]]
            if (n1neighbors[0][0] == currentvalue[0] && n1neighbors[0][1] == currentvalue[1]) {
                n1neighbors.splice(0, 1, currneighbors[1]);
            }
            else {
                n1neighbors.splice(1, 1, currneighbors[1]);
            }
            n2 = currneighbors[1]
            n2neighbors = neighborConnectionData[n2[0] + ',' + n2[1]]
            if (n2neighbors[0][0] == currentvalue[0] && n2neighbors[0][1] == currentvalue[1]) {
                n2neighbors.splice(0, 1, currneighbors[0]);
            }
            else {
                n2neighbors.splice(1, 1, currneighbors[0]);
            }
            triangleData.push([currneighbors[0],currneighbors[1],currentvalue])
        }

        else if (currentlist.length == 1) {
            point = currentlist[0]
            currneighbors = neighborConnectionData[currentvalue[0] + ',' + currentvalue[1]]
            neighborConnectionData[point[0] + ',' + point[1]] = currneighbors
            triangleData.push([currneighbors[0],point,currentvalue])
            triangleData.push([currneighbors[1],point,currentvalue])
            sidepoint = currneighbors[0]
            ngh = neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]].slice();

            if (ngh[0][0] == currentvalue[0] && ngh[0][1] == currentvalue[1]) {
                ngh.splice(0, 1, point);
                neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]] = ngh
            }
            else {
                ngh.splice(1, 1, point);
                neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]] = ngh
            }

            sidepoint = currneighbors[1]
            ngh = neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]].slice();
            if (ngh[0][0] == currentvalue[0] && ngh[0][1] == currentvalue[1]) {
                ngh.splice(0, 1, point);
                neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]] = ngh
            }
            else {
                ngh.splice(1, 1, point);
                neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]] = ngh
            }
        }

        else {
            neighbors = []
            point = currentlist[0]				
            neighbors.push(startingMneigh)
            sidepoint = startingMneigh
            triangleData.push([startingMneigh,point,currentvalue])
            ngh = neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]].slice();

            if (ngh[0][0] == currentvalue[0] && ngh[0][1] == currentvalue[1]) {
                ngh.splice(0, 1, point);
                neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]] = ngh
            }
            else {
                ngh.splice(1, 1, point);
                neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]] = ngh
            }

            neighbors.push(currentlist[1])
            neighborConnectionData[point[0] + ',' + point[1]] = neighbors

            for (k = 1; k < currentlist.length - 1; k++) {
                neighbors = []

                index = (k - 1)
                if (index < 0) {
                    index = index + currentlist.length
                }
                if (index >= currentlist.length) {
                    index = index % currentlist.length
                }
                
                neighbors.push(currentlist[index])

                index = (k + 1)
                if (index < 0) {
                    index = index + currentlist.length
                }
                if (index >= currentlist.length) {
                    index = index % currentlist.length
                }
                neighbors.push(currentlist[index])
                point = currentlist[k]
                neighborConnectionData[point[0] + ',' + point[1]] = neighbors
                triangleData.push([neighbors[0],point,currentvalue])
            }

            triangleData.push([ currentlist[currentlist.length - 2], currentlist[currentlist.length - 1],currentvalue])
            neighbors = []
            point = currentlist[currentlist.length - 1]
            neighbors.push(endingMneigh)
            sidepoint = endingMneigh
            triangleData.push([endingMneigh,point,currentvalue])
            ngh = neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]].slice();
            
            if (ngh[0][0] == currentvalue[0] && ngh[0][1] == currentvalue[1]) {
                ngh.splice(0, 1, point);
                neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]] = ngh
            }
            else {
                ngh.splice(1, 1, point);
                neighborConnectionData[sidepoint[0] + ',' + sidepoint[1]] = ngh
            }
            neighbors.push(currentlist[currentlist.length - 2])
            neighborConnectionData[point[0] + ',' + point[1]] = neighbors
        }
        ranges = []

        for (ind=0; ind < visitablenodes.length;ind++) {
            node = visitablenodes[ind]
            ranges.push(getPossibilityRange(node, creationNode[node[0]+','+node[1]])[0])
        }		

        minvalueindex = indexOfmin(ranges)
        prevPrange = ranges[minvalueindex]			
        nextnode = visitablenodes[minvalueindex]
        visitablenodes.splice(minvalueindex, 1);

    }

    return triangleData

}
