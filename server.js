const http = require("http");
const server = http.createServer((req, res) => {
    console.log('run request...');
})

server.listen(3000, 'localhost', () => {
    console.log('Nodejs server is run on port : 3000');
})