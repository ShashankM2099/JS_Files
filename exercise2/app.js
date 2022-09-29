//App.js

const res = require('express/lib/response');
const fs = require('fs');
const http = require('http');

const portNumber = 8080;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    if (req.url === '/contact') {
        path += 'contact.html';
    }
    else if (req.url === '/about') {
        path += 'about.html';
    }
    else {
        res.statusCode = 404;
        path += '404.html';
    }
});

fs.readFile(path, (err, Data) => {
    if (err) {
        console.log('There is an error', err);
        res.end();
    }
    else {
        res.write(data);
        res.end();
    }
});


// const express = require('express');
// const path = require('path');
// const app = express();



// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);

// app.get('/contact', function (req, res) {
//     res.render("contact.html");
// });
// app.get('/about', function (req, res) {
//     res.render("about.html");
// });
// app.get('/404', function (req, res) {
//     res.render("404.html");
// });

// Setting up
app.listen('8080', (err) => {
    if (err) console.log(err);
    console.log("Server Booting Up and Running : http://localhost:8080");
    console.log("Console is listening to port 8080...")
});