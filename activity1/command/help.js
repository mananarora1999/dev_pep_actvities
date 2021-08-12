function fn(src) 
{
    console.log("1. node main.js tree "+src);
    console.log("2. node main.js organize "+src);
    console.log("3. node main.js help");
    return"";
}
// code export 
module.exports = 
{
    fxn: fn
}