var matrix = [];
objectInMatrix = [1, 2, 3, 4, 5]
objectInMatrixCounts = [296, 70, 20, 6, 8]
for (var y = 0; y < 20; y++) {
    matrix.push([]);
    for (var x = 0; x < 20; x++) {
        matrix[y][x] = 0;
    }
}
for (var i = 0; i < objectInMatrix.length; i++) {
    fillMatrix(objectInMatrix[i],objectInMatrixCounts[i]);
}

var side = 40;
var grassArr = [];
var XotakerArr = [];
var GishatichArr = [];
var CleanerArr = []
var VirusArr = []

function fillMatrix(type,count) {
    for (var i = 0; i < count; i++) {
        var newx = Math.floor(Math.random() * 20)
        var newy = Math.floor(Math.random() * 20)
        if (matrix[newy][newx] == 0) {
                matrix[newy][newx] = type
        }
        else {
            i--
        }
    }
}


function setup() {
    frameRate(60);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr = new Xotaker(x, y);
                XotakerArr.push(gr);
            }
            else if (matrix[y][x] == 3) {
                var gr = new Gishatich(x, y);
                GishatichArr.push(gr);
            }
            else if (matrix[y][x] == 4) {
                var gr = new Virus(x, y);
                VirusArr.push(gr);
            }
            else if (matrix[y][x] == 5) {
                var gr = new cleaner(x, y);
                CleanerArr.push(gr);
            }
        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#ff00ff");
                rect(x * side, y * side, side, side);
            }
        }
    }

    result()
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in VirusArr) {
        VirusArr[i].mul();
    }
    for (var i in XotakerArr) {
        XotakerArr[i].eat();
    }
    for (var i in GishatichArr) {
        GishatichArr[i].eat();
    }
    for (var i in CleanerArr) {
        CleanerArr[i].eat();
    }
}

function result(){
    var X = 0;
    var V = 0;
    var nothing = 0;
    for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 20; x++) {
            if (matrix[y][x] == 1) {
                X++
                if (X == 400) {
                    alert("Only grass survived in the world")
                    endloop
                }
            }
            else if (matrix[y][x] == 4) {
                V++
                if (V == 400) {
                    alert("The virus has destroyed the whole world")
                    endloop
                }
            }
            else if (matrix[y][x] == 0) {
                nothing++
                if (nothing == 400) {
                    alert("All died in the world")
                    endloop
                }
            }
        }
    }
}