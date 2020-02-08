

var side = 20
var n = 20;
var m = 20
function setup() {
    var socket = io();
    var matrix = []
    createCanvas(n * side, m * side);
    background('#acacac');
    socket.on("data", drawMatrix)

    let htmlWeather = document.getElementById("weather")
    let grassCount = document.getElementById("grassCount")
    let grassEaterCount = document.getElementById("grassEaterCount")


    function drawMatrix(data) {
        matrix = data.matrix;
        var weather = data.weather
        htmlWeather.innerHTML = weather
        grassCount.innerText = data.grassCounter
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 1) {
                    if (weather == "Spring") {
                        fill("green");
                        rect(x * side, y * side, side, side);
                    }
                    else if (weather == "Summer") {
                        fill("darkgreen");
                        rect(x * side, y * side, side, side);
                    }
                    else if (weather == "Autumn") {
                        fill("orange");
                        rect(x * side, y * side, side, side);
                    }
                    else if (weather == "Winter") {
                        fill("white");
                        rect(x * side, y * side, side, side);
                    }
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
        // result()
    }

    // function result() {
    //     var X = 0;
    //     var V = 0;
    //     var nothing = 0;
    //     for (var y = 0; y < 20; y++) {
    //         for (var x = 0; x < 20; x++) {
    //             if (matrix[y][x] == 1) {
    //                 X++
    //                 if (X == 400) {
    //                     alert("Only grass survived in the world")
    //                     endloop
    //                 }
    //             }
    //             else if (matrix[y][x] == 4) {
    //                 V++
    //                 if (V == 400) {
    //                     alert("The virus has destroyed the whole world")
    //                     endloop
    //                 }
    //             }
    //             else if (matrix[y][x] == 0) {
    //                 nothing++
    //                 if (nothing == 400) {
    //                     alert("All died in the world")
    //                     endloop
    //                 }
    //             }
    //         }
    //     }
    // }
}