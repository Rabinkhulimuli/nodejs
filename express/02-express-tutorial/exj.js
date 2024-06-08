const express= require('express')
const app= express()
const path = require('path')
const {products}= require('./data.js')
app.get('/',(req,res)=> {
    const newProduct= products.map((one)=> {
        const {id,name,desc}= one
        return {id,name,desc}
    })
    return res.json(newProduct)
})
app.get('/api/:productid',(req,res)=> {
    const {productid}= req.params
   
    const singleproduct=products.find((one)=> {
        return one.id===Number(productid)
    })
    if (!singleproduct){
        return res.status(404).send("Page not found")
    }
    return res.json(singleproduct)
})
app.get('/api/v1/query',(req,res)=> {
    const {search,limit}=req.query
    console.log(search,Number(limit))
    let sortedProduct=[...products]
    if(search){
        sortedProduct= sortedProduct.filter((one)=> {
            return one.name.startsWith(search)
        })
    }
    if (limit){
        sortedProduct=sortedProduct.slice(0,Number(limit))
    }
    if(sortedProduct.length<1){
        //res.status(200).send("NO such product available right now")
        return res.status(200).json([{success:true},{data:[]}])
    }else
        return res.status(200).json(sortedProduct)
})
app.listen(5000,()=> {
    console.log("The port is listening to 5000")
})