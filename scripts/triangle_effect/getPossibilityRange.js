function getPossibilityRange(thepoint,mainnode) { 
    let connectedpoints = neighborConnectionData[thepoint[0] + ',' + thepoint[1]].slice()
    let Angle1 = ((Math.atan2(connectedpoints[0][1] - thepoint[1],connectedpoints[0][0] - thepoint[0])*180/Math.PI)+360)%360
    let Angle2 = ((Math.atan2(connectedpoints[1][1] - thepoint[1],connectedpoints[1][0] - thepoint[0])*180/Math.PI)+360)%360
    let Anglemain = ((Math.atan2(mainnode[1] - thepoint[1],mainnode[0] - thepoint[0])*180/Math.PI) + 360)%360
    let maxvalue = Math.max(Angle1,Angle2)
    let minvalue = Math.min(Angle1,Angle2)
    let between = [Angle2,Angle1]
    let i = 0
    let j = 1
    let startingcue = 1
    let possibilityrange = Math.abs(Angle2 - Angle1)

    if (Anglemain < maxvalue && Anglemain > minvalue) {
        possibilityrange = 360 - possibilityrange
        startingcue = -1
    }
    if(minvalue != Angle1) {
        i = 1
        j = 0
    }

    let startingMneigh = connectedpoints[i]
    let endingMneigh = connectedpoints[j]

    return [possibilityrange,between,startingMneigh,endingMneigh,startingcue]
}