var LivingCreature = require("./LivingCreature");
var random = require("./random");
var fire = require("./fire");

module.exports = class cleaner extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.bazm = 0;
        this.sovat = 0;
    }
    chooseCell(ch1, ch2) {
        this.getNewCoordinat();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch1 || ch2 )
                    found.push(this.directions[i]);
            }
        }
        return found;
    }
    getNewCoordinat() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    raid() {
        var datarkVandakner = this.chooseCell(0, 3);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            var randomFireSpawn = random(100);

            if (this.sovat < 30) {
                this.sovat += 1
                var norx = norVandak[0];
                var nory = norVandak[1];
                if (randomFireSpawn == 1) {
                    matrix[this.y][this.x] = 6;
                    var newFire = new fire(this.x, this.y);
                    fireArr.push(newFire);
                }
                else {
                    matrix[this.y][this.x] = 0;
                }

                this.x = norx;
                this.y = nory;

                if (matrix[nory][norx] == 3) {
                    for (var i in GishatichArr) {
                        if (norx == GishatichArr[i].x && nory == GishatichArr[i].y) {
                            GishatichArr.splice(i, 1);
                        }
                    }
                }
                matrix[nory][norx] = 5;
            }
            else {
                this.die()
            }
        }
    }

    eat() {
        var GrassMeet = this.chooseCell(1, 2);
        var norVandak = random(GrassMeet);
        if (norVandak) {
            var randomFireSpawn = random(100);

            var norx = norVandak[0];
            var nory = norVandak[1];
            if (randomFireSpawn == 1) {
                matrix[this.y][this.x] = 6;
                var newFire = new fire(this.x, this.y);
                fireArr.push(newFire);
            }
            else {
                matrix[this.y][this.x] = 0;
            }
            matrix[nory][norx] = 5;
            this.x = norx;
            this.y = nory;
            for (var i in grassArr) {
                if (norx == grassArr[i].x && nory == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            for (var i in XotakerArr) {
                if (norx == XotakerArr[i].x && nory == XotakerArr[i].y) {
                    XotakerArr.splice(i, 1);
                }
            }
            if (this.sovat > 0) {
                this.sovat -= 1
            }
            if (this.bazm >= 10000) {
                this.mul();
            }
            else {
                this.bazm += 1
            }
        }
        else {
            this.raid();
        }
    }

    mul() {
        var norVandak = random(this.chooseCell(0));
        if (norVandak) {

            var newx = norVandak[0];
            var newy = norVandak[1];
            matrix[newy][newx] = 5;
            var newcleaner = new cleaner(newx, newy);
            CleanerArr.push(newcleaner);
            this.bazm = 0;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in CleanerArr) {
            if (this.x == CleanerArr[i].x && this.y == CleanerArr[i].y) {
                CleanerArr.splice(i, 1);
            }
        }
    }
}
