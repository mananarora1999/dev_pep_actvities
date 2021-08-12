let fs = require("fs");
let path = require("path");
function fn(src) 
{
     let message = "organize command executed with path " + src;

     
         let cwdPath = src  // path of dir to be organized
         
         let filesinDir = fs.readdirSync(cwdPath); // array of files in input dir
         
         let parDir = path.basename(cwdPath);
         
         let print = `
         └──${parDir}`;
         console.log(print);
     
         for(let i=0; i<filesinDir.length; i++)
         {
           let print = `
              ├──${filesinDir[i]}`;
           console.log(print);    
         }
     
return message;
}
// code export 
module.exports = 
{
    fxn: fn
}