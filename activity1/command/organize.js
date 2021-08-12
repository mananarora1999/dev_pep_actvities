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
    let message = "organize command executed with path " + src;

    
    let cwdPath = src;  // path of dir to be organized
    // console.log("Input Path is",cwdPath);

    let filesinDir = fs.readdirSync(cwdPath); // array of files in input dir
    // console.log(filesinDir);

    let organizeddirPath = path.join(cwdPath,"organized_files"); // path made for organized_files dir in input dir
    // console.log("Path of organized_files folder to be made is",organizeddirPath);
    if(fs.existsSync(organizeddirPath) == false)
    {
     fs.mkdirSync(organizeddirPath); 
    }
    

    for(let typesoffolders in types)
    {
      let typesoffoldersPath = path.join(organizeddirPath,typesoffolders); // paths made for typesoffolders dir in organized_files dir
      // console.log("Path of folder inside organized_files folder to be made is",typesoffoldersPath);
      fs.mkdirSync(typesoffoldersPath);
    }

    let othertypesoffoldersPath = path.join(organizeddirPath,"others"); // paths made for others dir in organized_files dir
    // console.log("Path of folder inside organized_files folder to be made is",othertypesoffoldersPath);
    fs.mkdirSync(othertypesoffoldersPath);

    
    for(let i=0; i<filesinDir.length; i++)
    {
        let ext =  path.extname(filesinDir[i]);
        ext = ext.slice(1);
        let typeoffile = extensioncheck(ext);
        let copyFileSrcPath = path.join(cwdPath,filesinDir[i])
        let copyFileDestPath = path.join(cwdPath,"organized_files",typeoffile,filesinDir[i])
        fs.copyFileSync(copyFileSrcPath, copyFileDestPath);            
    }

    return message;
}

function extensioncheck(ext) 
{
  for(let typesoffolders in types)
  {
    let TOF = types[typesoffolders]
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