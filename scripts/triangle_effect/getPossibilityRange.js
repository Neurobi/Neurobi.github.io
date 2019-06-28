function getPossibilityRange(thepoint,mainnode) { 
    connectedpoints = neighborConnectionData[thepoint[0] + ',' + thepoint[1]].slice()
    pointofinterest = connectedpoints[0]
    Angle1 = Math.atan2(pointofinterest[1] - thepoint[1],pointofinterest[0] - thepoint[0])*180/Math.PI
    if (Angle1 < 0) {
        Angle1 = 360 + Angle1
    }

    pointofinterest = connectedpoints[1]
    Angle2 = Math.atan2(pointofinterest[1] - thepoint[1],pointofinterest[0] - thepoint[0])*180/Math.PI
    if (Angle2 < 0) {
        Angle2 = 360 + Angle2
    }

    Anglemain = Math.atan2(mainnode[1] - thepoint[1],mainnode[0] - thepoint[0])*180/Math.PI
    if (Anglemain < 0) {
        Anglemain = 360 + Anglemain
    }

    maxvalue = Math.max(Angle1,Angle2)
    minvalue = Math.min(Angle1,Angle2)

    if (Anglemain < maxvalue && Anglemain > minvalue) {
        possibilityrange = 360 - Math.abs(Angle2 - Angle1)
        between = [Angle2,Angle1]
        startingcue = -1
    }
    else {
        possibilityrange = Math.abs(Angle2 - Angle1)
        between = [Angle2,Angle1]
        startingcue = 1
    }

    if(minvalue == Angle1) {
        startingMneigh = connectedpoints[0]
        endingMneigh = connectedpoints[1]
    }
    else {
        startingMneigh = connectedpoints[1]
        endingMneigh = connectedpoints[0]
    }
    return [possibilityrange,between,startingMneigh,endingMneigh,startingcue]
}