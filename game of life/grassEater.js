var LivingCreature = require("./LivingCreature");
var random = require("./random");

module.exports = class Xotaker extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.bazm = 0;
        this.sovat = 0;
    }
    chooseCell(ch, ch1) {
        this.getNewCoordinat();
        return super.chooseCell(ch, ch1)
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

    ride() {
        var datarkVandakner = this.chooseCell(0,7);
        var norVandak = random(datarkVandakner);
        if (norVandak) {        
            if(this.bazm > 0){
                this.bazm -= 1
            }
            if(this.sovat < 8){
                this.sovat += 1
                matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 2;
            this.x = norx;
            this.y = nory;
            }
            else{
                this.die()
            }
        }
    }

    eat() {
        var xoter = this.chooseCell(1);
        var norVandak = random(xoter);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 2;
            this.x = norx;
            this.y = nory;
            for (var i in grassArr) {
                if (norx == grassArr[i].x && nory == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            if(this.sovat > 0){
                this.sovat -= 1
            }
            if(this.bazm >=8){
                this.mul();
            }
            else{
                this.bazm += 1
            }
        }
        else {
            this.ride();
        }
    }

    mul() {
        var norVandak = random(this.chooseCell(0));
        if (norVandak) {
            grassEaterHashiv++
            var newx = norVandak[0];
            var newy = norVandak[1];
            matrix[newy][newx] = 2;
            var newXotaker = new Xotaker(newx, newy);
            XotakerArr.push(newXotaker);
            this.bazm = 0;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in XotakerArr) {
            if (this.x == XotakerArr[i].x && this.y == XotakerArr[i].y) {
                XotakerArr.splice(i, 1);
            }
        }
    }
}
