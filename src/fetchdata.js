//const fs=require('fs/promises')
//const path = require ('path')
import 'fs' 
import 'path'
function getdata(){
    const data= fs.readFile(path.join(__dirname,"data.json"),"utf-8")
    console.log(data);
    return data;
}

const data=getdata()
