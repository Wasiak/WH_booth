// WITHOUT EXPRESS ETC JUST FOR TEST BELOW
// DO NOT REMOVE !!

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = '192.168.0.18';
// // const hostname = '0.0.0.0';
// // const hostname = 'localhost';
// const port = 3000;

//
// fs.readFile('index.html', (err, html) => {
//     if (err) {
//         throw err;
//     }
//     const server = http.createServer((req, res) => {
//         res.statusCode = 200;
//         res.setHeader('Content-type', 'text/html');
//         res.write(html);
//         res.end();
//     });
    
//     server.listen(port, hostname, () => {
//         console.log(`Server started on port ${port}`);
//     })
// });
//

// http.createServer((request, response) => {
//     console.log('req = ', request.url);

//     let filePath = `.${request.url}`;
//     if (filePath === './') {
//         filePath = './index.html';
//     }

//     const extname = String(path.extname(filePath)).toLowerCase();
//     const mimeTypes = {
//         '.html': 'text/html',
//         '.js': 'text/javascript',
//         '.css': 'text/css',
//         '.json': 'application/json',
//         '.png': 'image/png',
//         '.jpg': 'image/jpg',
//         '.gif': 'image/gif',
//         '.wav': 'audio/wav',
//         '.mp4': 'video/mp4',
//         '.woff': 'application/font-woff',
//         '.ttf': 'application/font-ttf',
//         '.eot': 'application/vnd.ms-fontobject',
//         '.otf': 'application/font-otf',
//         '.svg': 'application/image/svg+xml'
//     };

//     const contentType = mimeTypes[extname] || 'application/octet-stream';

//     fs.readFile(filePath, (error, content) => {
//         if (error) {
//             if(error.code === 'ENOENT') {
//                 fs.readFile('./404.html', (error, content) => {
//                     response.writeHead(200, { 'Content-Type': contentType });
//                     response.end(content, 'utf-8');
//                 });
//             }
//             else {
//                 response.writeHead(500);
//                 response.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
//                 response.end();
//             }
//         }
//         else {
//             response.writeHead(200, { 'Content-Type': contentType });
//             response.end(content, 'utf-8');
//         }
//     });
// }).listen(port, hostname, () => {
//     console.log(`Server is running on port ${port}`);
// })
