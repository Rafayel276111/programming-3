var LivingCreature = require("./LivingCreature");
var random = require("./random");

module.exports = class Virus extends LivingCreature{

    mul() {
        if (weather != "Winter"){
        this.multiply++;
        var norVandak = random(this.chooseCell(0,1,2,3,7));
        if (this.multiply >=60 && norVandak) {
            virusHashiv++
            var norV = new Virus(norVandak[0], norVandak[1]);
            VirusArr.push(norV);
            var norx = norVandak[0]
            var nory = norVandak[1]
            if(matrix[nory][norx] == 1){
                for (var i in grassArr) {
                    if (norx == grassArr[i].x && nory == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
            }
            else if (matrix[nory][norx] == 2){
                for (var i in XotakerArr) {
                    if (norx == XotakerArr[i].x && nory == XotakerArr[i].y) {
                        XotakerArr.splice(i, 1);
                    }
                }
            }
            else if (matrix[nory][norx] == 3){
                for (var i in GishatichArr) {
                    if (norx == GishatichArr[i].x && nory == GishatichArr[i].y) {
                        GishatichArr.splice(i, 1);
                    }
                }
            }
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.multiply = 0;
        }
        }
    }
}
