var random = require("./random");
var LivingCreature = require("./LivingCreature");
module.exports = class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        var norVandak = random(this.chooseCell(0));
        if (this.multiply >=4 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }


}


