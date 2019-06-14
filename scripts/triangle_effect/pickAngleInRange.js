function pickAngleInRange(rangeLength,extremes,startingcuevalue) {

    angledeviation = 10

    intervaldivision = parseInt(rangeLength/50);
    minvalue = Math.min(extremes[0],extremes[1])
    maxvalue = Math.max(extremes[0],extremes[1])
    anglevalues = []

    if (startingcuevalue == 1) {
        anglevalue = minvalue
        for (i=0; i < intervaldivision; i++) {
            anglevalue = anglevalue + 50 + (angledeviation*(Math.random() - 0.5))
            if (Math.abs(maxvalue - anglevalue) > 30) {
                anglevalues.push(anglevalue)
            }
        }
    }
    else {
        anglevalue = minvalue
        for (i=0; i < intervaldivision; i++) {
            anglevalue = anglevalue - 50 + (angledeviation*(Math.random() - 0.5))
            if (anglevalue < 0) {
                anglevalue = 360 + anglevalue
            }
            if (Math.abs(maxvalue - anglevalue) > 30) {
                anglevalues.push(anglevalue)
            }		
        }
    }
    return anglevalues
}