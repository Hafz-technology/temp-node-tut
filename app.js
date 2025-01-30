// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _ = require('lodash');
// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log('Hello world');

// const {readFile} = require('fs');
// console.log('started a first task');
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     console.log('completed first task');
// });

// console.log('starting next task');


// started operating system process
// console.log('first');
// setTimeout(() => {
//     console.log('second');
// }, 0 );

// console.log('third');
// // completed and exited operating system process

// setInterval(() => {
//     console.log('hello world');
// }, 2000);
// console.log('I will run first');
// // process stays alive unless
// // Kill Process CONTROL + C
// // unexpected error

// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log('request event');
//     res.end('Hello World');
// });

// server.listen(5000, () => {
//     console.log('Server listening on port : 5000....');
// });





// const http = require('http');


// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Home page');
//     }
//     if (req.url === '/about') {
//         for (let i = 0; i < 100; i++) {
//             for (let j = 0; j < 100; j++) {
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('about page');
//     }
//     res.end('Error page');
// });


// server.listen(5000, () => {
//     console.log('Server listening on port : 5000....');
// });



const {readFile, writeFile} = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `This is the result: ${first}, ${second}`, {flag: 'a'});
        console.log(first, second);
        
    } catch (error) {
        console.log(error);
    }
    
    
    
    
};

start();



// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } 
//             else {
//              resolve(data);  
//              }
//         });
//     })
// };

// getText('./content/first.txt').then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });















