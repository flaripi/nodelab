const http = require('http')
const port = process.env.PORT
const fs = require('fs')

const server = http.createServer((req, res)=>{
  fs.readFile('site.html',(err, arq)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(arq)
    return res.end()
  })

})
server.listen(port || 1337,()=>{console.log('Server Running')})