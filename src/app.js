const fs = require('fs');

require('http').createServer(function (request, response) {
    let html = '', code = 200;
    if (request.method === 'GET' && request.url === '/') {
        html = getIndexHtml();
    } else if (request.method === 'POST' && request.url === '/verify') {
        const body = request.body;
        console.log(body);
    } else {
        code = 404;
        html = 'Not found';
    }

    response.writeHead(code, {
        'Content-Type': 'text/html',
        'Content-Length': html.length,
    });
    response.end(html);
}).listen(8080);

function getIndexHtml() {
    return fs.readFileSync(__dirname + '/../template/index.htm').toString();
}