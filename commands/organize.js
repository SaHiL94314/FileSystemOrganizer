let fs=require("fs");
let path=require("path");
function organizeFn(directory_path){
    if(directory_path==undefined){
        directory_path=process.cwd();
    }
    let dstpath = path.join(directory_path,"organized_files");
    if(fs.existsSync(dstpath)==false) fs.mkdirSync(dstpath);

    let filename = fs.readdirSync(directory_path);
    for(let i=0;i<filename.length;i++){
        let oldfilepath=path.join(directory_path,filename[i]);
       
        if(fs.lstatSync(oldfilepath).isFile()==true){
        let category=findCategory(oldfilepath);
        
        
        let categorypath=path.join(dstpath,category);
        if(fs.existsSync(categorypath)==false) fs.mkdirSync(categorypath);

        let fname = path.basename(oldfilepath);
        let fdst = path.join(categorypath,fname);
        fs.copyFileSync(oldfilepath,fdst);
        fs.unlinkSync(oldfilepath);
     
        
        }
    }
    
    // let filepath=path.join(directory_path,filename);
    
}
function findCategory(filename){
    let ext=path.extname(filename);
    ext=ext.slice(1);
    for(let type in types){
        let arr = types[type];
        for(let i=0;i<arr.length;i++){
            if(arr[i]==ext) return type;
        }
    }
    return "others";
}
module.exports={
    organizeKey:organizeFn
}