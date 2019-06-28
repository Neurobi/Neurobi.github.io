function pickAngleInRange(rangeLength,extremes,startingcuevalue) {
    let angledeviation = 10
    let intervaldivision = parseInt(rangeLength/50);
    let minvalue = Math.min(extremes[0],extremes[1])
    let maxvalue = Math.max(extremes[0],extremes[1])
    let anglevalues = []
    let anglevalue = minvalue
    let offset = 50

    if (startingcuevalue != 1) {
        offset = -offset
    }       
    for (let i=0; i < intervaldivision; i++) {
        anglevalue = anglevalue + offset + (angledeviation*(Math.random() - 0.5))
        if ((anglevalue < 0)&&(offset<0)) {
            anglevalue = 360 + anglevalue
        }
        if (Math.abs(maxvalue - anglevalue) > 30) {
            anglevalues.push(anglevalue)
        }
    }
    return anglevalues
}