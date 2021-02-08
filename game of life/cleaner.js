var LivingCreature = require("./LivingCreature");
var random = require("./random");
var fire = require("./fire");

module.exports = class cleaner extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.bazm = 0;
        this.sovat = 0;
    }
    chooseCell(ch, ch1, ch2) {
        this.getNewCoordinat();
        return super.chooseCell(ch, ch1, ch2)
    }
    // chooseCell(ch1, ch2) {
    //     this.getNewCoordinat();
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == ch1 || matrix[y][x] == ch2)
    //                 found.push(this.directions[i]);
    //         }
    //     }
    //     return found;
    // }
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
        var datarkVandakner = this.chooseCell(0, 4, 7);
        var norVandak = random(datarkVandakner);
        if (norVandak) {

            if (this.bazm > 0) {
                this.bazm -= 1;
            }
            if (this.sovat < 50) {
                var norx = norVandak[0];
                var nory = norVandak[1];
                if(matrix[nory][norx] == 4){
                this.sovat += 1000;
                }
                else{
                    this.sovat +=1
                }
                matrix[this.y][this.x] = 0;
                this.x = norx;
                this.y = nory;

                if (matrix[nory][norx] == 4) {
                    for (var i in VirusArr) {
                        if (norx == VirusArr[i].x && nory == VirusArr[i].y) {
                            VirusArr.splice(i, 1);
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
        var GrassForFire = this.chooseCell(1)
        var norVandak = random(GrassMeet);
        if (norVandak) {
            var randomFireSpawn = random(100);

            var norx = norVandak[0];
            var nory = norVandak[1];
            if (randomFireSpawn == 1 && GrassForFire) {
                matrix[this.y][this.x] = 6;
                var newFire = new fire(this.x, this.y);
                fireArr.push(newFire);
            }
            else {
                matrix[this.y][this.x] = 0;
            }
            var diferentBazm = matrix[nory][norx]
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
            if (this.bazm >= 30 ) {
                this.mul();
            }
            else if(diferentBazm == 1) {
                this.bazm += 1
            }
            else if(diferentBazm == 2) {
                this.bazm += 5
            }
        }
        else {
            this.raid();
        }
    }

    mul() {
        var norVandak = random(this.chooseCell(0));
        if (norVandak) {
            cleanerHashiv++
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
