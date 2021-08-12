let fs = require("fs");
let path = require("path");
let types = 
{
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function fn(src) 
{
  if(src == undefined)
  {
     src = process.cwd()
  }

    let message = "organize command executed with path " + src;

    
    let cwdPath = src;  // path of dir to be organized
    

    let filesinDir = fs.readdirSync(cwdPath); // array of files in input dir
    

    let organizeddirPath = path.join(cwdPath,"organized_files"); // path made for organized_files dir
    
    if(fs.existsSync(organizeddirPath) == false)
    {
     fs.mkdirSync(organizeddirPath); // organized_files dir made
    }
    

    for(let typesoffolders in types)
    {
      let typesoffoldersPath = path.join(organizeddirPath,typesoffolders); // paths made for typesoffolders dir 
      fs.mkdirSync(typesoffoldersPath); // typesoffolders dir made
    }

    let othertypesoffoldersPath = path.join(organizeddirPath,"others"); // paths made for others dir 
   
    fs.mkdirSync(othertypesoffoldersPath); // others dir made

    
    for(let i=0; i<filesinDir.length; i++)
    {
        let ext =  path.extname(filesinDir[i]); // check ext of files in input dir
        ext = ext.slice(1);
        if(ext != "") // check for dir or file
        {
         let typeoffile = extensioncheck(ext); // check for type of file based upon extension
         let copyFileSrcPath = path.join(cwdPath,filesinDir[i])  // copy file source path
         let copyFileDestPath = path.join(cwdPath,"organized_files",typeoffile,filesinDir[i]) // dest path with file name included
         fs.copyFileSync(copyFileSrcPath, copyFileDestPath);    // COPY
        }        
    }

    return message;
}

function extensioncheck(ext) 
{
  for(let typesoffolders in types)
  {
    let TOF = types[typesoffolders] // array at keys
    for(let i=0; i< TOF.length; i++)
    {
       if(ext == TOF[i])
       {
        let tof = typesoffolders;
        return tof;
       }
    }
  }
  return "others";
}  

// code export 
module.exports = 
{
    fxn: fn
}