var LivingCreature = require("./LivingCreature");
var random = require("./random");


module.exports = class fire extends LivingCreature {

    mul() {
        if (weather != "Winter") {
            this.multiply++;
            var norVandak = random(this.chooseCell(1,2,3,4,5));

            if (this.multiply >= 8) {
                if (norVandak) {
                    fireHashiv++
                    var norV = new fire(norVandak[0], norVandak[1]);
                    fireArr.push(norV);
                    var norx = norVandak[0]
                    var nory = norVandak[1]
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
                    else if (matrix[nory][norx] == 4) {
                        for (var i in VirusArr) {
                            if (norx == VirusArr[i].x && nory == VirusArr[i].y) {
                                VirusArr.splice(i, 1);
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
                    matrix[norVandak[1]][norVandak[0]] = 6;
                    this.multiply = 0;
                }
                else {
                    this.die();
                }
            }

        }
        else {
            this.die();
        }
    }
    die() {
        for (var i in fireArr) {
            matrix[this.y][this.x] = 0;
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                fireArr.splice(i, 1);
            }
        }
    }
}
