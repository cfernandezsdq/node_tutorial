const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url);
    
    if(req.url === '/'){
        res.end('Welcome to my homepage');
    } else if (req.url === '/about'){
        res.end('Here is my short history');
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for</p>
        <a href="/">Go back</a>
        `);
    }
    
});

server.listen(5000);