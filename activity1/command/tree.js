let fs = require("fs");
let path = require("path");

function fn(src) 
{

  if(src == undefined)
  {
     src = process.cwd()
  }

   let message = "tree command executed with path " + src;

     
   let cwdPath = src  // path of dir to be organized
   
   let filesinDir = fs.readdirSync(cwdPath); // array of files in input dir
   
   let parDir = path.basename(cwdPath)
   // console.log(filesinDir);
   // console.log(parDir);
      
   
   let print1 = `└──${parDir}`;
   console.log(print1);

   for(let i=0; i<filesinDir.length; i++)
   {
     
     let ext =  path.extname(filesinDir[i]);
     ext = ext.slice(1); 
     if(ext == "")
     {
      //   let print2 = `\t\t└──${filesinDir[i]}`;
      //   console.log(print2);
        fn(path.join(cwdPath,filesinDir[i]));
     }
     else
     { 
      let print3 = `\t├──${filesinDir[i]}`;
      console.log(print3);    
     }
   }
   return message;
}


// code export 
module.exports = 
{
    fxn: fn
}