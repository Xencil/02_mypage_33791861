var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
        const Details = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>About Me</title>
        </head>
        <body>
            <h1>Welcome to My Page</h1>
            <h2>About me:</h2>
            <p>Hi! My name is Chris. I am currently undertaking the Dynmaic web applications module where i am learning how to build simple node.js apps.</p>
            <p>I enjoy working out, gaming and reading books.</p>
        </body>
        </html>`
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(Details);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
