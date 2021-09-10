// let fs = require("fs");

function help (){
      
    console.log(`List of All commands:
                    node main.js tree "directory"
                    node main.js "help"
                    node main.js organize "directory" `)
    
}
module.exports = {
    helpFn: help
}