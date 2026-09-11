// You have to write a Node.js program to clear clutter inside of a directory and organize the 
// contents of that directory into diffferent folders

// for example, these files become :

//1. name.jpg
//2.name.png
//3.this.pfd
//4.harry.zip
//5.Rohan.zip
//6.cat.jpg
//7.harry.pdf

//this:
//jpg/name.jpg , jpg/cat.jpg
//png/name.png
//pdf/this.pdf pdg/harry.pdf
//zip/harry.zip  zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path  from "path"
import { exit } from "process"

let files = await fs.readdir("E:\sigma web development\leacture93")
console.log(files)

let extension=[]
for (const item of files) {
    let ext= item.split(".")[item.split(".").length-1]
    console.log(ext)
    if (fsn.existsSync(ext)) {
// Move the file to this directory
fs.rename(item.toString(), path.join(ext,path))
    }
    else{
        fs.mkdir(ext)
    }
    console.log(item)    
}