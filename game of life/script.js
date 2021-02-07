var socket = io();
socket.on("data", draw)
var clicked = 0;
var side = 20
var n = 40;
var m = 40
var EventCol = 150;
var matrix = []
var mouseClcX = 0
var mouseClcY = 0

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
    // console.log(matrix);
    matrix = data.matrix;
    EventCol = data.EventCol
    var weather = data.weather
    htmlWeather.innerHTML = weather
    grassCount.innerText = data.grassCounter
    grassEaterCount.innerText = data.grassEaterCount
    predatorCount.innerText = data.predatorCount
    virusCount.innerText = data.virusCount
    cleanerCount.innerText = data.cleanerCount
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            strokeWeight(1);
            if (matrix[y][x] == 0) {
                fill('grey');
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
        strokeWeight(1);
        line(mouseX, 0, mouseX, 800);
        strokeWeight(2);
        line(0, mouseY, 800, mouseY);
        mouseClcX = mouseX
        mouseClcY = mouseY
    }
    return mouseClcX, mouseClcY
}


function mousePressed() {
    clc = [1,2,3]
    let CordinateData = {
        mouseX: mouseClcX,
        mouseY: mouseClcY,
        clc:clc
    }
    socketsemit('lightningEvent', CordinateData);
    console.log("clickCanvas")
    console.log(mouseClcY, mouseClcX)
}