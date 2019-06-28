function inside(point, vs) {
    
    let i  = undefined
    let j  = undefined
    let xi = undefined
    let xj = undefined
    let yi = undefined
    let yj = undefined
    let intersect = undefined
    let x = point[0]
    let y = point[1]
    let inside = false

    for (i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        xi = vs[i][0], yi = vs[i][1];
        xj = vs[j][0], yj = vs[j][1];
        intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) {
            inside = !inside
        }
    }
    return inside
}