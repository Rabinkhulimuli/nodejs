const http = require('http')
const {readFileSync}= require('fs')
const homepage= readFileSync('./navbar-app/index.html')
const homepagestyle= readFileSync('./navbar-app/styles.css')
const homepagejs=readFileSync('./navbar-app/browser-app.js')
const homepagesvg=readFileSync('./navbar-app/logo.svg')
const server= http.createServer((req,res)=> {
    console.log(req.url)
    if (req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }
    else if(req.url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homepagestyle)
        res.end()
    }
    else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homepagesvg)
        res.end()
    }
    else if(req.url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homepagejs)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write(`<h2>404 ERROR</h2>`)
        res.end()
    }
})
server.listen(5000)