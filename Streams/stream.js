const fs=require('fs')

//Readind file using File System stream
const readableStream=fs.createReadStream('sample.txt',{encoding:'utf8'})

readableStream.on('data',(chunk)=>{
    console.log(chunk);
})

readableStream.on('end',()=>{
    console.log('End of the reading')
})

readableStream.on('error',(err)=>{
    console.error('Error',err);
})

//Writing file using File System stream
const writableStream=fs.createWriteStream('output.txt')
writableStream.write('Hello ')
writableStream.write('world')
writableStream.end()

writableStream.on('finish',()=>{
    console.log('Finished Writing');
    
})

//Piping streams:read one file,copies the content and paste it in another file
const read=fs.createReadStream('sample.txt')
const write=fs.createWriteStream('output1.txt')

read.pipe(write)
write.on('finish',()=>{
    console.log('File copied successfully');
    
})



//perform operations on large file
const readline=require('readline')
const read1=fs.createReadStream('example.txt')
const rl=readline.createInterface({input:read1})
rl.on('line',(line)=>{
    console.log('Line: ',line);
})

rl.on('close',()=>{
    console.log('Finished processing')
})