var express = require('express');
var app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// server.js
  var albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];

  // server.js
    var tacos = [
      { name: "La Taqueria" },
      { name: "El Farolito" },
      { name: "Taqueria Cancun" }
    ];

    app.use(express.static('public'));
    app.use(express.static('vendor'));


app.get('/', function(request, response) {
  console.log('GET /');
  // response.send('Hello World!');
  response.sendFile('views/index.html', {root : __dirname});
});

app.get('/api/albums', function(request, response) {
  console.log('GET /api/albums');
  response.send(albums);
});

app.listen(3000, function() {
  console.log('listening at 3000');
});

app.get('/api/tacos', function(req, res) {
  res.json(tacos);
});
