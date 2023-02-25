const http = require('http')
const fs = require('fs')
const port = process.env.PORT

const server = http.createServer((req, res)=>{
  fs.appendFile('text.txt','Marina levantou a mao',(err)=>{
    if(err) throw err
    console.log('File Created')
  })

})
server.listen(port || 1337,()=>{console.log('Server Running')})