function colorPick(xval,yval) {
    lvalue = 10 + ((xval/window.innerWidth)*70) + (Math.random() - 0.5)*20
    hvalue = colorconfig[0][2]
    svalue = 100
    return 'hsl(' + hvalue + ',' + svalue + '%,' + lvalue + '%)'
}