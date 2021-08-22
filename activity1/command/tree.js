let fs = require("fs");
let path = require("path");

function fn(src,input) 
{

  if(src == undefined)
  {
     src = process.cwd()
  }

   let message = "tree command executed with path " + src;

     
   let cwdPath = src  // path of dir to be organized
   
   let filesinDir = fs.readdirSync(cwdPath); // array of files in input dir
   
   let parDir = path.basename(cwdPath)
   
      
   let print1 = input+"└─────"+parDir;
   console.log();
   console.log(print1);

   for(let i=0; i<filesinDir.length; i++)
   {
     
     let ext =  path.extname(filesinDir[i]);

     if(ext == "") // if dir
     {
        fn(path.join(cwdPath,filesinDir[i]),"\t"); // RECURSIVE CALL
     }

     else // file
     { 
      let print2 = `\t\t├──${filesinDir[i]}`;
      console.log(print2);    
     }
   }
   return message;
}


// code export 
module.exports = 
{
    fxn: fn
}