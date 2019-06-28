function indexOfmin(arr) {
    let min = arr[0]
    let minIndex = 0

    if (arr.length === 0) {
        return -1
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i
            min = arr[i]
        }
    }
    return minIndex
}