function helpFn(){
    console.log(`
    list of all commands:
     1. node main.js tree "directory_path" 
     2. node main.js organize "directory_path"
     3. node main.js help`)
}
module.exports={
    helpKey:helpFn
}