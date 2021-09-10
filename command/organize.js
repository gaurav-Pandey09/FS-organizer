let fs = require("fs");
let path = require("path");
const { extname } = require('path').posix;
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organize(srcPath){
    if (srcPath == undefined) {
        srcPath = process.cwd();
    }
    let organizedFilePath = path.join(srcPath , "organized_files");
    if(fs.existsSync(organizedFilePath) == false){
        fs.mkdirSync(organizedFilePath);
    }
    // console.log("organize implemented", srcPath);
// scan whole srcPath

    let allThefiles = fs.readdirSync(srcPath);
    // console.log(allThefiles);

    for(let i=0;i < allThefiles.length; i++){
        let fullOriginalPath = path.join(srcPath, allThefiles[i]);
        if(fs.lstatSync(fullOriginalPath).isFile() == true){
            let folderName = checkextnTellFolder(allThefiles[i]);
            // console.log(allThefiles[i], "will got to" , folderName);
            copyFileToDest(folderName, fullOriginalPath, srcPath)

        }
    }
}

function copyFileToDest(folderName,fullOriginalPath,srcPath){
    let destFolderPath = path.join(srcPath,"organized_files",folderName);
    if(fs.existsSync(destFolderPath) == false){
        fs.mkdirSync(destFolderPath);
    }
    let originalfilename = path.basename(fullOriginalPath);
    let destFilePath = path.join(destFolderPath, originalfilename);
    fs.copyFileSync(fullOriginalPath, destFilePath);
    console.log(originalfilename, "copied to", folderName);
}

function checkextnTellFolder(fileName){
    let lastExtname = path.extname(fileName);
    lastExtname = lastExtname.slice(1);
    for(let key in types){
        for(let i = 0; i < types[key].length ; i++){
            if(types[key][i] == lastExtname){
                return key;
            }
        }
    }
    return "others";
}
module.exports = {
    organizeFn: organize
}