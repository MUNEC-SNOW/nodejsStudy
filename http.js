const http = require("node:http");

// http.get({
//     hostname: 'localhost',
//     port: 8080,
//     path: '/nacos/menu',
//     agent: false
// }, (res) => {
//     res.resume()
// })

const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`
  console.log(str)

  let content = '<h1>404 Not found!</h1>'

  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if (url === '/about.html') {
    content = '<h1>关于页面</h1>'
  }

  // 设置 Content-Type 响应头，解决中文乱码的问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 向客户端响应内容
  res.end(content)
}).listen(8888, () => {
    console.log('server running at http://127.0.0.1:8888')
})