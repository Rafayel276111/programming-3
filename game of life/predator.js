var LivingCreature = require("./LivingCreature");
var random = require("./random");

module.exports = class Gishatich extends LivingCreature{
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
        var xotvandak = this.chooseCell(1);
        var xotrand = random(xotvandak);
        if (norVandak) {
            if(this.bazm > 0){
                this.bazm -= 1
            }
            if(this.sovat < 10){
                this.sovat += 1
                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                matrix[nory][norx] = 3;
                this.x = norx;
                this.y = nory;
            }
            else{
                this.die()
            }
        }
        else if(norVandak == undefined && xotrand){
            // if(this.bazm > 0){
            //     this.bazm -= 1
            // }
                if(this.sovat < 40){
                    this.sovat += 1
                    matrix[this.y][this.x] = 0;
                    var norx = xotrand[0];
                    var nory = xotrand[1];
                    matrix[nory][norx] = 3;
                    this.x = norx;
                    this.y = nory;
                    for (var i in grassArr) {
                        if (norx == grassArr[i].x && nory == grassArr[i].y) {
                            grassArr.splice(i, 1);
                        }
                    }
                }
                else{
                    this.die()
                }
            }
        }
    
    eat() {
        var xoter = this.chooseCell(2);
        var norVandak = random(xoter);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 3;
            this.x = norx;
            this.y = nory;
            for (var i in XotakerArr) {
                if (norx == XotakerArr[i].x && nory == XotakerArr[i].y) {
                    XotakerArr.splice(i, 1);
                }
            }
            if(this.sovat > 0){
                this.sovat -= 1
            }
            if(this.bazm >=3){
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
            predatorHashiv++
            var newx = norVandak[0];
            var newy = norVandak[1];
            matrix[newy][newx] = 3;
            var newGishatich = new Gishatich(newx, newy);
            GishatichArr.push(newGishatich);
            this.bazm = 0;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in GishatichArr) {
            if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                GishatichArr.splice(i, 1);
            }
        }
    }
}
