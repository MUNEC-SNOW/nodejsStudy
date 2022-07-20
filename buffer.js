
const bufArray = [];

bufArray[0] = Buffer.alloc(10);
bufArray[1] = Buffer.alloc(10,1);
bufArray[2] = Buffer.allocUnsafe(10); 
bufArray[3] = Buffer.from([1,2,3])
bufArray[4] = Buffer.from([257,257.5,-255, '1']);
bufArray[5] = Buffer.from('test');
bufArray[6] = Buffer.from('tést', 'latin1');

bufArray.forEach((e) => {
    console.log(e);
})

const buf = Buffer.from('hello world', 'utf8');

console.log(buf.toString('hex'));
// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
// Prints: aGVsbG8gd29ybGQ=

console.log(Buffer.from('fhqwhgads', 'utf8'));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>
console.log(Buffer.from('fhqwhgads', 'utf16le'));

console.log(Uint8Array.BYTES_PER_ELEMENT);
console.log(Uint16Array.BYTES_PER_ELEMENT);
console.log(Uint32Array.BYTES_PER_ELEMENT);
console.log(BigUint64Array.BYTES_PER_ELEMENT);


const buf1 = Buffer.from('hello', 'utf16le');
const unit = new Uint16Array(buf1.buffer, buf1.byteOffset, buf1.length / Uint16Array.BYTES_PER_ELEMENT);

console.log(buf1);
console.log(new Uint16Array(buf1))
console.log(unit)
const { Blob } = require("buffer")

const blob = new Blob(["hi there"]);

const msgt1 = new MessageChannel();
const msgt2 = new MessageChannel();

msgt1.port1.onmessage = async ({ data }) => {
    console.log(await data.arrayBuffer());
    msgt1.port1.close();
}

msgt2.port1.onmessage = async ({ data }) => {
    await setTimeout(()=>{},1000);
    console.log(await data.arrayBuffer());
    msgt2.port1.close();
}

msgt1.port2.postMessage(blob);
msgt2.port2.postMessage(blob);

blob.text().then(console.log);

const buf2 = Buffer.alloc(5,1);
console.log(buf2);
console.log(Buffer.byteLength('技术'))