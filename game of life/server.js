var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function(req, res){
    res.redirect('index.html');
});

server.listen(3000, function (){
    console.log("yes")
});
matrix = [];

objectInMatrix = [1, 2, 3, 4, 5]
objectInMatrixCounts = [296, 70, 20, 6, 8]
for (var y = 0; y < 20; y++) {
    matrix.push([]);
    for (var x = 0; x < 20; x++) {
        matrix[y][x] = 0;
    }
}
for (var i = 0; i < objectInMatrix.length; i++) {
    matrix = fillMatrix(objectInMatrix[i],objectInMatrixCounts[i]);
}
side = 40;
grassArr = [];
XotakerArr = [];
GishatichArr = [];
CleanerArr = []
VirusArr = []

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
    return matrix;
}

var Grass = require('./grass.js');
var Xotaker = require('./grassEater.js');
var Gishatich = require('./predator.js');
var Virus = require('./virus.js');
var cleaner = require('./cleaner.js');


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
function drawserver(){
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
    let sendData = {
        matrix: matrix,
    }
    io.sockets.emit("data", sendData);
}

setInterval(drawserver, 3000)