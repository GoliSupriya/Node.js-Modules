//Reading a file
const fs=require('fs')
fs.readFile('example.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    else{
        console.log(data);
    }
})

//Writing a file
const content='Node js practice file'
fs.writeFile('output.txt',content,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    else{
        console.log('Written successfully');
    }
})

//Http module
const http=require('http')
const server=http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.end('<div style="background-color:lightgreen;width:100%;height:100%"><h1>Hello Developers</h1><h2>Hiii</h2></div>')
})

server.listen(3000,()=>{
    console.log('running at https://localhost:3000');
})


//Path module
const path=require('path')
const directory='/user/local'
const fileName='sample.txt'
const fullpath=path.join(directory,fileName)
console.log(fullpath)

//os module
const os=require('os')
console.log('Platform: ',os.platform())
console.log('CPU Architecture: ',os.arch())
console.log('Total memory: ',os.totalmem())
console.log('Free memory: ',os.freemem())

//url module
const url=require('url')
const myurl=new URL('https://example.com:8080/path/name?query=hello#hash')
console.log('Host:',myurl.host);
console.log('Path Name:',myurl.pathname);
console.log('Search params:',myurl.searchParams.get('query'));

//crypto module
const crypto=require('crypto')
const hash=crypto.createHash('sha256')
hash.update('Node modules')
console.log(hash.digest('hex'))