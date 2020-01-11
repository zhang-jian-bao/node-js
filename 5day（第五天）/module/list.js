var fs = require("fs");
function a1(response) {
    fs.readFile("./data/list.json","utf8",function (error,data) {
        if(error){
            console.log(error)
        }else{
            response.write(data);
            response.end()
        }
    })
}

module.exports = a1