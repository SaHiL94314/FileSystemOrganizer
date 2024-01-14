let fs=require("fs");
let path=require("path");
function treeFn(directory_path){
    if(directory_path==undefined){
        treeFnHelper(process.cwd(),"");
        return;
    }
    if(fs.existsSync(directory_path)==true){
        treeFnHelper(directory_path,"");
    }
    else{
        console.log("enter correct path");
    }
}
function treeFnHelper(directory_path,indent){
    let isfil=fs.lstatSync(directory_path).isFile();
    if(isfil){
        let filename=path.basename(directory_path);
        console.log(indent,"├──",filename);
    }
    else{
        let dirname=path.basename(directory_path);
        console.log(indent,"└──",dirname);
        let content = fs.readdirSync(directory_path);
        for(let i=0;i<content.length;i++){
            let childpath=path.join(directory_path,content[i]);
            treeFnHelper(childpath,indent+"\t");
        }
    }
}
module.exports={
    treeKey:treeFn
}