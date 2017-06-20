var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);
require('./dependencies')(wagner);

var app = express();

app.use(require('morgan')("combined"));

wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));

// Serve up static HTML pages from the file system.
// For instance, '/Recipe4/hello-http.html' in
// the browser will show the '../Recipe4/hello-http.html'
// file.
app.use(express.static('../', { maxAge: 4 * 60 * 60 * 1000 /* 2hrs */ }));

app.listen(3000);
console.log('Listening on port 3000!');
