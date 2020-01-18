class cleaner {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
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
        this.index = 5;

    }
    yntrelvirus(ch) {
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
    yntrelVandak() {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if(matrix[y][x] !== 5 && matrix[y][x] !== 4)
                found.push(this.directions[i]);
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
        var datarkVandakner = this.yntrelVandak();
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            
            if (this.sovat < 30) {
                this.sovat += 1

                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                this.x = norx;
                this.y = nory;

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
                matrix[nory][norx] = 5;
            }
            else {
                this.mahanal()
            }
        }
    }



    utel() {
        var virus = this.yntrelvirus(4);
        var norVandak = random(virus);

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 5;
            this.x = norx;
            this.y = nory;

            for (var i in VirusArr) {
                if (norx == VirusArr[i].x && nory == VirusArr[i].y) {
                    VirusArr.splice(i, 1);
                }
            }

            if (this.sovat > 0) {
                this.sovat -= 1
            }

            if (this.bazm >= 15) {
                this.bazmanal();
            }
            else {
                this.bazm += 1
            }
        }
        else {
            this.sharjvel();

        }

    }
    bazmanal() {
        var norVandak = random(this.yntrelvirus(0));

        if (norVandak) {
            var newx = norVandak[0];
            var newy = norVandak[1];
            matrix[newy][newx] = 5;
            var newcleaner = new cleaner(newx, newy);
            CleanerArr.push(newcleaner);
            this.bazm = 0;

        }

    }


    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in CleanerArr) {
            if (this.x == CleanerArr[i].x && this.y == CleanerArr[i].y) {
                CleanerArr.splice(i, 1);
            }
        }
    }
}
