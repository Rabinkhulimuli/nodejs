const{createReadStream}= require('fs')
const http= require('http')
/* const stream= createReadStream('./files/bigfile.txt',{encoding:'utf8'})

stream.on('data',(result)=> {
    console.log(result)
})
stream.on('error',(err)=> {
    console.log(err)
}) */
const server= http.createServer(function (req,res) {
    const data= createReadStream('./files/bigfile.txt','utf8')
    
    data.on('open',()=> {
        data.pipe(res)
    })
    data.on('error',(err)=> {
        res.end(err)
    })
})
server.listen(5000)
