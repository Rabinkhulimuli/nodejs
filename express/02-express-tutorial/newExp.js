//middleware function
const express= require('express')
const app = express()
const logger= require('./logger')
const auth= require('./authorize')
/* app.get('/',logger,(req,res)=> {

    return res.status(200).send("homepage")
}) */
app.use([logger,auth])
app.get('/',(req,res)=> {
    return res.status(200).send("Home page")
})
app.get('/api/price',(req,res)=> {
    return res.status(200).send("This is price section")
})
app.get('/api/item',(req,res)=> {
    console.log(req.user)
    return res.status(200).send("hello world")
})
app.listen(5000,()=> {
    console.log("The port is listening to 5000")
})