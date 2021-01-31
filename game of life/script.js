var socket = io();
socket.on("data", draw)
var clicked = 0;
var side = 20
var n = 40;
var m = 40
var EventCol = 150;
var matrix = []

let htmlWeather = document.getElementById("weather")
let grassCount = document.getElementById("grassCount")
let grassEaterCount = document.getElementById("grassEaterCount")
let predatorCount = document.getElementById("predatorCount")
let virusCount = document.getElementById("virusCount")
let cleanerCount = document.getElementById("cleanerCount")

function setup() {


    createCanvas(n * side, m * side);
    background('#acacac');

}
    function draw(data) {
        console.log(matrix);
        matrix = data.matrix;
        var weather = data.weather
        htmlWeather.innerHTML = weather
        grassCount.innerText = data.grassCounter
        grassEaterCount.innerText = data.grassEaterCount
        predatorCount.innerText = data.predatorCount
        virusCount.innerText = data.virusCount
        cleanerCount.innerText = data.cleanerCount
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 0) {
                    fill(EventCol);
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
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("pink");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("purple");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 7) {
                    fill(EventCol);
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }

function clickFunction(){
    socket.emit('lightningEvent');
    console.log("click")
}