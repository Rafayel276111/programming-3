class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        this.multiply = 0;
        this.bazm = 0;
        this.sovat = 0;
        this.index = 2;

    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    stanalNorKordinatner() {
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


    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
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
                this.mahanal()
            }
        }


    }
    utel() {
        var xoter = this.yntrelVandak(1);
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
                this.bazmanal();
            }
            else{
                this.bazm += 1
            }
        }
        else {
            this.sharjvel();

        }

    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            var newx = norVandak[0];
            var newy = norVandak[1];
            matrix[newy][newx] = 2;
            var newXotaker = new Xotaker(newx, newy);
            XotakerArr.push(newXotaker);
            this.bazm = 0;

        }

    }


    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in XotakerArr) {
            if (this.x == XotakerArr[i].x && this.y == XotakerArr[i].y) {
                XotakerArr.splice(i, 1);
            }
        }
    }
}
