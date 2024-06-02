const {readFile,writeFile}= require('fs')
const path=require('path')
const loc=path.join('files','text.txt')
readFile(loc,'utf8',(err,result)=> {
    if(err){
        console.log("there is an error ")
        return
    }
    const sto=result;
    writeFile('./files/async.txt',`hey its been a while ${sto}`,{flag:'a'},(err,result)=>{
        if(err){
            console.log("its an error")
            return

        }
        
    })
})
readFile('./files/async.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})
