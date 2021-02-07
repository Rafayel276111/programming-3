// SocketIo

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(4000, function () {
    console.log("yes")
});

matrix = [];

var Grass = require('./grass.js');
var Xotaker = require('./grassEater.js');
var Gishatich = require('./predator.js');
var Virus = require('./virus.js');
var cleaner = require('./cleaner.js');
var fire = require('./fire.js');
var events = require('./newevent.js');
const { runInContext } = require('vm');

io.on('connection', function (socket) {
     socket.on('lightningEvent', function(data){
        console.log("event")
        mouseX = data.mouseX
        mouseY = data.mouseY
        console.log(mouseX, mouseY)
        events.run()
     })
})

//Masivies

grassArr = [];
XotakerArr = [];
GishatichArr = [];
CleanerArr = [];
VirusArr = [];
fireArr = [];
EventArr = [];
weather = "Spring";
weatherInit = 1;
grassHashiv = 0;
grassEaterHashiv = 0;
predatorHashiv = 0;
virusHashiv = 0;
cleanerHashiv = 0;
EventCol = 150;

//MatrixGenerator

objectInMatrix = [1, 2, 3, 4, 5]
objectInMatrixCounts = [900, 50, 50, 5, 2]

for (var y = 0; y < 40; y++) {
    matrix[y] = [];
    for (var x = 0; x < 40; x++) {
        matrix[y][x] = 0;
    }
}

for (var i = 0; i < objectInMatrix.length; i++) {
    matrix = fillMatrix(objectInMatrix[i], objectInMatrixCounts[i]);
}

function fillMatrix(type, count) {
    for (var i = 0; i < count; i++) {
        var newx = Math.floor(Math.random() * 40)
        var newy = Math.floor(Math.random() * 40)
        if (matrix[newy][newx] == 0) {
            matrix[newy][newx] = type;
        }
        else {
            i--
        }
    }
    console.log(matrix)
    return matrix;
}

function creatingObj() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
                grassHashiv++
            }
            else if (matrix[y][x] == 2) {
                var gr = new Xotaker(x, y);
                XotakerArr.push(gr);
                grassEaterHashiv++
            }
            else if (matrix[y][x] == 3) {
                var gr = new Gishatich(x, y);
                GishatichArr.push(gr);
                predatorHashiv++
            }
            else if (matrix[y][x] == 4) {
                var gr = new Virus(x, y);
                VirusArr.push(gr);
                virusHashiv++
            }
            else if (matrix[y][x] == 5) {
                var gr = new cleaner(x, y);
                CleanerArr.push(gr);
                cleanerHashiv++
            }
            else if (matrix[y][x] == 6) {
                var gr = new fire(x, y);
                fireArr.push(gr);
            }
        }
    }
}

//Weather
function GetCordinateData(lightningEvent){
        console.log("event")
        mouseX = lightningEvent.mouseX
        mouseY = lightningEvent.mouseY
        console.log(mouseX, mouseY)
        events.run()
        
}
function getWeather() {
    weatherInit++
    if (weatherInit == 5) {
        weatherInit = 1
    }
    if (weatherInit == 4) {
        weather = "Winter"
    }
    else if (weatherInit == 3) {
        weather = "Autumn"
    }
    else if (weatherInit == 2) {
        weather = "Summer"
    }
    else if (weatherInit == 1) {
        weather = "Spring"
    }
    return weather
}
//
creatingObj()
//
    

function drawserver() {
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
    for (var i in fireArr) {
        fireArr[i].mul();
    }

    //
    let sendData = {
        matrix: matrix,
        weather: weather,
        grassCounter: grassHashiv,
        grassEaterCount: grassEaterHashiv,
        predatorCount: predatorHashiv,
        virusCount: virusHashiv,
        cleanerCount: cleanerHashiv,
        EventCol: EventCol
    }
    io.sockets.emit("data", sendData);
    //
}
//
setInterval(drawserver, 50)
setInterval(getWeather, 4000)
