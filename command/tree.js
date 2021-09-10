let fs = require("fs");
let path = require("path");
function tree(srcPath) {
    if(srcPath == undefined)
        srcPath = process.cwd();
        // console.log("Tree command", srcPath);
        let content = fs.readdirSync(srcPath);
        console.log(content);

        let mainFolderName = path.basename(srcPath);
        let completePath = "|--" + mainFolderName;
        for(let i=0; i < content.length ; i++){
            completePath = completePath + "\n\t" + "|--"+content[i];
        }
        console.log(completePath);
        //  |__ 
            
        //  |￣￣
    
}
module.exports = {
    treeFn: tree
}