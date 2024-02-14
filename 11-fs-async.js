const {readFile, writeFile} = require('fs');
console.log('Start');
readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    console.log('First result');
    readFile('./content/second.txt','utf8', (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        console.log('Second result');
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`, 
            (err,result)=>{
            if(err){
                console.log(err);
            }
            console.log('Done!');
        })

    })
})
console.log('Starting next task');