// const log = require('./logger');

// log('message');


// path Module Learn
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// OS module Learn

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// var totalcpus = os.cpus();

// console.log('Total Memory: + toatlMemory');

// Template string
// ES6 / ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// Files System Learn
// const fs = require('fs');

//sync method
// const Files = fs.readdirSync('./');
// console.log(Files);

//async method
// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// // Event module
// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });

// logger.log('message');


// HTTP Module
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/course') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(4000);

console.log('Listening on port 4000...');

