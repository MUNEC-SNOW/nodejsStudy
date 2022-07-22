const fs = require('fs');


const rs = fs.createReadStream('./download.jpeg');
const ws = fs.createWriteStream('new1.jpeg');

// fs.readFile('./fstest.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return console.log('err: ' + err.message);
//     }
//     console.log("d:" + data);
// })

// fs.readFile('./download.jpeg', 'base64', (err, data) => {
//     if (err) {
//         return console.log('err: ' + err.message);
//     }
//     console.log("d:" + data);
// })

// rs.once('open', () => {
//     console.log("read stream open...")
// })

// rs.once('close', function () {
//     console.log('read stream close~~')
//     ws.end()
// })

// ws.once('open', function () {
//     console.log('write stream open~~')
// })

// ws.once('close', function () {
//     console.log('write stream close~~')
// })

// rs.on('data', (data) => {
//     console.log(data);
//     ws.write(data);
// })

rs.pipe(ws);