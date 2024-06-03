const http= require('http')
const server=http.createServer((req,res)=> {
    if(req==='/'){
        console.log("wellcome to homepage")
        res.end("Hello World ")
    }
})
server.listen(5000)