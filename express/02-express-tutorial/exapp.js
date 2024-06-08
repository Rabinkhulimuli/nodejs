//const express= require('express')()
// get,post,put,delete,all,use,listen
const express = require('express')
const path = require('path')
const app = express()
/* app.get('/',(req,res)=> {
    res.status(200).send("homepage ")
})
app.get('/about',(req,res)=> {
    res.status(200).send("This is about page")
})
app.all('*',(req,res)=> {
    res.status(404).send(<h1>Resource not found</h1>)
}) */
//static file importing 
app.use(express.static('./public'))

/* app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
}) */
app.listen(5000,()=> {
    console.log("server is listening on port 5000")
})