const eventEmmiter= require('events')
const customEvent= new eventEmmiter()

customEvent.on('res',()=> {
    console.log("Hello world i received")

})
customEvent.on('res',(name,id)=> {
    console.log(`hey ${name}. your id is ${id}`)
})
customEvent.emit('res',"xeldrex", 801)