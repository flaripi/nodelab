const http=require('http')
const port=1337
const host='127.0.0.1'

const server = http.createServer((req, resp)=>{
    resp.writeHead(200,{
        'Content-Type':'text/html'
    })
    if(req.url=='/'){
        resp.write('<h1>Home - Test API</h1>')
    }
    if(req.url=='/home'){
        resp.write('<h1>Home - Test API</h1>')
    }
    if(req.url=='/contacts'){
        resp.write('<h1>Contact<br></h1><p> Name: Flavio Piccolo<br> E-mail: flaviopiccolo@gmail.com</p>')
    }    
    resp.end()

})
server.listen(port, host, ()=>{console.log('Server Running')})