const http= require('http')
const server=http.createServer((req,res)=>{
   if(req.url ==='/'){
    res.end("Wellcome to homepage ")
   }
   if(req.url === "/about"){
    res.end("this is about section")
   }
   res.end(`<h1>Oopsiii </h1>
   <a href='/'>back to home</a>
   `)
})
server.listen(5000)