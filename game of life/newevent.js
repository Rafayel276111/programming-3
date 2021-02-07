var random = require("./random");
module.exports =  {
   
run(){
    // var newx = Math.floor(Math.random() * 40)
    // var newy = Math.floor(Math.random() * 40)
    var newx = Math.round(mouseX/20)
    var newy = Math.round(mouseY/20)
    matrix[newy][newx] = 7
    EventCol = 255;
    console.log("InFunc")
}

}