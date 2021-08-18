let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);

let optionArr =[];
let filesArr =[];

// loop for seperating commands and options
for (let index = 0; index < inputArr.length; index++) 
{
   if(inputArr[index].charAt(0) == "-")
   {
       optionArr.push(inputArr[index]);
   }
   else
   {
       filesArr.push(inputArr[index]);
   }
}

// console.log(filesArr);
// console.log(optionArr);

// // 1st and 2nd
if(filesArr.length >= 1 && optionArr.length == 0)
{
    
    let contentoffile = help(filesArr);

    if(contentoffile == "")
    {
      console.log("File Does Not Exist");
      return ;
    }

    //display
    console.log("CONTENT/S  OF  FILE/S  is/are");
    console.log(contentoffile);
}

// // -s
else if(filesArr.length >=1 && optionArr.length == 1 && optionArr[0].charAt(1)=='s')
{
    

    let contentoffile = help(filesArr);
    let contenttobeprinted = [];

    if(contentoffile == "")
    {
    console.log("File Does Not Exist");
    return;
    }

    contentoffileArr = contentoffile.split("\r\n"); // content of files to an array after spliting
   

    //loop to push only printable elements to a new array  
    for (let index = 0; index < contentoffileArr.length; index++) 
    {
        if(contentoffileArr[index] != "")
        {
            contenttobeprinted.push(contentoffileArr[index])
        }
    }

    console.log("CONTENT/S  OF  FILE/S  is/are");
    

    if(contentoffileArr[contentoffileArr.length-1] == "") // if last element of the output is blank then 
    {
        //loop to print
        for (let index = 0; index < contenttobeprinted.length; index++) 
        {
             console.log(contenttobeprinted[index]);
             console.log();
        }
    }

    else // if last element of the output is not blank then
    {
        for (let index = 0; index < contenttobeprinted.length; index++) 
        {
            if(index != contenttobeprinted.length-1)
            {
             console.log(contenttobeprinted[index]);
             console.log();
            }
            else
            {
                console.log(contenttobeprinted[index]);
            }
        }   
    }

}

// // -n
else if(filesArr.length >=1 && optionArr.length == 1 && optionArr[0].charAt(1)=='n')
{
    
    let contentoffile = help(filesArr);

    if(contentoffile == "")
    {
    console.log("File Does Not Exist");
    return;
    }

    contentoffileArr = contentoffile.split("\r\n");// content of files to an array after spliting
   
    console.log("CONTENT/S  OF  FILE/S  is/are");

    //loop to print
    for (let index = 0; index < contentoffileArr.length; index++) 
    {
        console.log((index+1)+" "+contentoffileArr[index]);
    }

}

// // -b
else if(filesArr.length >=1 && optionArr.length == 1 && optionArr[0].charAt(1)=='b')
{
    let contentoffile = help(filesArr);

    if(contentoffile == "")
    {
    console.log("File Does Not Exist");
    return;
    }


    contentoffileArr = contentoffile.split("\r\n"); // content of files to an array after spliting
    
    console.log("CONTENT/S  OF  FILE/S  is/are");
    

    //loop to print
    let lineno = 0;
    for (let index = 0; index < contentoffileArr.length; index++) 
    {

        if(contentoffileArr[index] != '')
        {
         console.log((lineno+1)+" "+contentoffileArr[index]);
         lineno = lineno + 1;
        }
        else
        {
         console.log(contentoffileArr[index]);
        }
        
    }
}

// // -n -b
else if(filesArr.length >=1 && optionArr.length == 2 && optionArr[0].charAt(1)=='n')
{
    let contentoffile = help(filesArr);
 
    if(contentoffile == "")
    {
    console.log("File Does Not Exist");
    return;
    }
 
    contentoffileArr = contentoffile.split("\r\n");// content of files to an array after spliting
    
    console.log("CONTENT/S  OF  FILE/S  is/are");
 
    //loop to print
    for (let index = 0; index < contentoffileArr.length; index++) 
    {
        console.log((index+1)+" "+contentoffileArr[index]);
    }
 
}

// // -b -n
else if(filesArr.length >=1 && optionArr.length == 2 && optionArr[0].charAt(1)=='b')
{
    let contentoffile = help(filesArr);
 
    if(contentoffile == "")
    {
    console.log("File Does Not Exist");
    return;
    }

 
    contentoffileArr = contentoffile.split("\r\n"); // content of files to an array after spliting
    
    console.log("CONTENT/S  OF  FILE/S  is/are");
     
 
    //loop to print
    let lineno = 0;
    for (let index = 0; index < contentoffileArr.length; index++) 
    {
 
        if(contentoffileArr[index] != '')
        {
         console.log((lineno+1)+" "+contentoffileArr[index]);
         lineno = lineno + 1;
        }
        else
        {
         console.log(contentoffileArr[index]);
        }
         
    }
}

// // -s -n -b
else if(filesArr.length >=1 && optionArr.length == 3 && optionArr[0].charAt(1)=='s' && optionArr[1].charAt(1)=='n')
{
    let contentoffile = help(filesArr);
    let contenttobeprinted = [];

    if(contentoffile == "")
    {
    console.log("File Does Not Exist");
    return;
    }
 
    contentoffileArr = contentoffile.split("\r\n"); // content of files to an array after spliting
   
 
    //loop to push only printable elements to a new array  
    for (let index = 0; index < contentoffileArr.length; index++) 
    {
        if(contentoffileArr[index] != "")
        {
            contenttobeprinted.push(contentoffileArr[index])
        }
    }
    
        
    console.log("CONTENT/S  OF  FILE/S  is/are");
    
    //loop to print
    let lineno = 0;
    let string = "";


    if(contentoffileArr[contentoffileArr.length-1] == "") // if last element of the output is blank then 
    {
        //loop to print
        
        for (let index = 0; index < contenttobeprinted.length; index++) 
        {
            if(index != contenttobeprinted.length-1)
            {
              string = string + (lineno+1) +" "+contenttobeprinted[index]+"\n"+(lineno+2)+"\n";
              lineno = lineno + 2;
            }
            else
            {
                string = string + (lineno+1) +" "+contenttobeprinted[index]+"\n"+(lineno+2);
            }
        }
    }

    else // if last element of the output is not blank then
    {
        for (let index = 0; index < contenttobeprinted.length; index++) 
        {
            if(index != contenttobeprinted.length-1)
            {
             string = string + (lineno+1) +" "+contenttobeprinted[index]+"\n"+(lineno+2)+"\n";
             lineno = lineno + 2;
            }
            else
            {
                string = string + (lineno+1) +" "+contenttobeprinted[index];
            }
        }

    }

    console.log(string);
}

// // -s -b -n
else if(filesArr.length >=1 && optionArr.length == 3 && optionArr[0].charAt(1)=='s' && optionArr[1].charAt(1)=='b')
{
    let contentoffile = help(filesArr);
    let contenttobeprinted = [];
 
    if(contentoffile == "")
    {
    console.log("File Does Not Exist");
    return;
    }

    contentoffileArr = contentoffile.split("\r\n"); // content of files to an array after spliting
        
    //loop to push only printable elements to a new array  
    for (let index = 0; index < contentoffileArr.length; index++) 
    {
        if(contentoffileArr[index] != "")
        {
            contenttobeprinted.push(contentoffileArr[index])
        }
    }

    console.log("CONTENT/S  OF  FILE/S  is/are");
    
    //loop to print
    let lineno = 0;
    let string = "";

    if(contentoffileArr[contentoffileArr.length-1] == "") // if last element of the output is blank then 
    {
        //loop to print
        
        for (let index = 0; index < contenttobeprinted.length; index++) 
        {
            if(index != contenttobeprinted.length-1)
            {
              string = string + (lineno+1) +" "+contenttobeprinted[index]+"\n\n";
              lineno = lineno + 1;
            }
            else
            {
                string = string + (lineno+1) +" "+contenttobeprinted[index]+"\n";
            }
        }
    }

    else // if last element of the output is not blank then
    {
        for (let index = 0; index < contenttobeprinted.length; index++) 
        {
            if(index != contenttobeprinted.length-1)
            {
              string = string + (lineno+1) +" "+contenttobeprinted[index]+"\n\n";
              lineno = lineno + 1;
            }
            else
            {
                string = string + (lineno+1) +" "+contenttobeprinted[index];
            }
        }

    }

    
    console.log(string);
}

// // help function
function help(filesArr)
{
    let contentoffile ="";

    //loop to check if all file exits or not
    for (let index = 0; index < filesArr.length; index++) 
    {
        filepath = filesArr[index];
        let doesExist = fs.existsSync(filepath);
        if(doesExist == false)
        {    
            return "";
        }
    }

    //loop to read and concatenate contents of file
    for (let index = 0; index < filesArr.length; index++) 
    {
        filepath = filesArr[index];

        if(filesArr.length == index+1) // if last file to be read
        {
            contentoffile = contentoffile + fs.readFileSync(filepath);    
        }
        else // if not the last file to be read
        {
            contentoffile = contentoffile + fs.readFileSync(filepath) + "\r\n"; 
        }       
    }

    return contentoffile;
}



