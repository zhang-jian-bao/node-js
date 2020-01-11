var fs = require("fs");
function s1(response) {
    fs.readFile("./data/banner.json","utf8",function (error,data) {
        if(error){
            console.log(error)
        }else{
            response.write(data);
            response.end()
        }
    })
}

module.exports = s1