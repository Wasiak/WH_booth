// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use((req, res, next) => {
//     console.log('in the middleware!');
//     next(); // alows the request to continue to the next middleware in line
// });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'));
});
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // same as 2 lines above
