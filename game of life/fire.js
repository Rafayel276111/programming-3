var LivingCreature = require("./LivingCreature");
var random = require("./random");

module.exports = class fire extends LivingCreature {

    chooseCell() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] !== 6) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var norVandak = random(this.chooseCell());
        if (this.multiply >= 10 && norVandak) {
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
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.multiply = 0;
        }
    }
}
