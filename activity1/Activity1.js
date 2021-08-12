let helpObj = require("../activity 1/command/help");
let treeObj = require("../activity 1/command/tree");
let organizeObj = require("../activity 1/command/organize");
// main input
//  input -> node main.js tree "path"
// Print->tree command executed with path ""
//  input -> node main.js organize "path"
// Print ->organize command executed with path ""
//  input -> node main.js help 
    // Print -> list of all the commands
            // 1. node main.js tree "path"
            // 2. node main.js organize "path"
            // 3. node main.js help

let inputArr = process.argv.slice(2);
let pathinput = inputArr[1];


if(inputArr[0]=="tree")
{
    console.log(treeObj.fxn(pathinput));
}

else if(inputArr[0]=="organize")
{
    console.log(organizeObj.fxn(pathinput));
}

else if(inputArr[0]=="help")
{
    console.log(helpObj.fxn());
}