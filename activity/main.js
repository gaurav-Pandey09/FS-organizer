// let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);
let helpObj = require("./../command/help");
let treeObj = require("./../command/tree");
let organizeObj = require("./../command/organize");
const { kill } = require("process")
console.log(inputArr);


let cmd = inputArr[0];
switch (cmd) {
    case "help":
        // console.log("help implemented",inputArr[1]);
        helpObj.helpFn();
        break;
    case "organize":
        // console.log("organize implementd",inputArr[1]);
        organizeObj.organizeFn(inputArr[1]);
        break;
    case "tree":
        // console.log("tree implemented",inputArr[1]);
        treeObj.treeFn(inputArr[1])
        break;
    default:
        console.log(`Wrong command.
        Kindly  enter help to list all the commands`);
        break;
}