const {readFile,writeFile}=require('fs').promises
const path= require('path')
const location= path.join('files','async.txt')
const startNew= async()=> {
    try{
        const first1=await readFile(location,'utf8')
        console.log(first1)
    }
    catch(err){
        console.log(err)
    }
}
startNew()

/* const {readFile,writeFile}= require('fs')
const util = require('util')
const readFilePromise= util.promisify(readFile)
const writeFilePromise= util.promisify(writeFile)

const Start= async()=> {
    try {
        const first= await readFilePromise('./files/text.txt','utf8')
        await writeFilePromise('./files/utilasync.txt',` Wellcome ${first}`,{flag: 'a'})
        console.log(first)
    }
    catch(err){
        console.log(err)
    }
}
Start() */
/* const getText=(path)=> {
    return new Promise((resolve,reject)=> {
        readFile(path,'utf8',(err,result)=> {
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}
 getText('./files/text.txt')
 .then((result) => console.log(result))
 .catch((err) => console.log(err)) 

 const start = async()=> {
    try{
        const first=  await getText('./files/text.txt')
        console.log(first)
    }
    catch(err){
        console.log(err);
    }
 }
 start() */