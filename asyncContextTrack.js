const http = require("node:http");
const { AsyncLocalStorage } = require("async_hooks");

    const asyncLocalStorage = new AsyncLocalStorage();

    function logWithId(msg) {
        const id = asyncLocalStorage.getStore();
        console.log(`${id !== undefined ? id : '-'}:`, msg);
    }

    let idSeq = 0;
    const server = http.createServer((req, res) => {
        asyncLocalStorage.run(idSeq++, () => {
            logWithId('start');
            setImmediate(() => {
                logWithId('finish');
                res.end();
            });
        });
    });

    server.listen(8080)

    http.get('http://localhost:8080');
    http.get('http://localhost:8080');

