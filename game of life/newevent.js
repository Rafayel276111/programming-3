var LivingCreature = require("./LivingCreature");

var random = require("./random");
module.exports = class Evnt extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
    }
    chooseCell() {
        this.getNewCoordinat();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    getNewCoordinat() {
        this.directions = [];
        var MathFMX = Math.floor(mouseX / 20)
        var MathFMY = Math.floor(mouseY / 20)
        for (var i = -3; i <= 3; i++) {
            for (var y = -3; y <= 3; y++) {
                
                this.directions.push([MathFMX + i, MathFMY + y])
                
            }
        }
        
    }
    run() {

        var newCells = this.chooseCell()
        if (newCells) {
            evntHashiv++
            for (var i in newCells) {
                var norx = newCells[i][0];
                var nory = newCells[i][1];

                if (matrix[nory][norx] == 1) {
                    for (var i in grassArr) {
                        if (norx == grassArr[i].x && nory == grassArr[i].y) {
                            grassArr.splice(i, 1);
                        }
                    }
                }
                else if (matrix[nory][norx] == 2) {
                    for (var i in XotakerArr) {
                        if (norx == XotakerArr[i].x && nory == XotakerArr[i].y) {
                            XotakerArr.splice(i, 1);
                        }
                    }
                }
                else if (matrix[nory][norx] == 3) {
                    for (var i in GishatichArr) {
                        if (norx == GishatichArr[i].x && nory == GishatichArr[i].y) {
                            GishatichArr.splice(i, 1);
                        }
                    }
                }
                else if (matrix[nory][norx] == 5) {
                    for (var i in CleanerArr) {
                        if (norx == CleanerArr[i].x && nory == CleanerArr[i].y) {
                            CleanerArr.splice(i, 1);
                        }
                    }
                }
                else if (matrix[nory][norx] == 4) {
                    for (var i in VirusArr) {
                        if (norx == VirusArr[i].x && nory == VirusArr[i].y) {
                            VirusArr.splice(i, 1);
                        }
                    }
                }
                else if (matrix[nory][norx] == 6) {
                    for (var i in fireArr) {
                        if (norx == fireArr[i].x && nory == fireArr[i].y) {
                            fireArr.splice(i, 1);
                        }
                    }
                }
                matrix[nory][norx] = 7
            }
        }
    }
}