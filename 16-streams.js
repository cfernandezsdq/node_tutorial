const { log } = require('console');
const { createReadStream, writeFileSync} = require('fs');
const { result } = require('lodash');

const stream = createReadStream('./content/big.txt');
let chunk = 1;
stream.on('data',(result)=>{
    console.log(result);
    console.log(`Execution number: ${chunk}`);
    writeFileSync('./content/stream-log.txt', `${createReadStream.name} read ${chunk}\n`, {flag: 'a'});
    chunk++
});

stream.on('error', (err)=> console.log(err));