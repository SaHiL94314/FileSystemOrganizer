#!/usr/bin/env node
let fs=require("fs");
let path=require("path");
let organizeObj=require("./commands/organize");
let treeObj=require("./commands/tree");
let helpObj=require("./commands/help");
let input = process.argv;
input = input.slice(2);

types={
    media:["mp4","mkv"],
    archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents:["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps"],
    app:["exe","dmg","pkg","deb"]
};
let command=input[0];
switch(command){
    case "tree":
        treeObj.treeKey(input[1]);
        break;
    case "organize":
        organizeObj.organizeKey(input[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("kindly enter correct command");
        break;
}


