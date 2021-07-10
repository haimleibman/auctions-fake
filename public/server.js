const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3001;
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname + '/public')));

app.get('/auctions', function(req, res) {
  console.log('I get entered!');

  const options = {
    // host to forward to
    host: 'static.bidflyer.com.s3.amazonaws.com',
    // path to forward to
    path: '/promotional/test.json',
    // request method
    method: 'GET',
  };

  res.header();

  const creq = http.request(options, pres => {
      // set encoding
      pres.setEncoding('utf8');

      // set http status code based on proxied response
      res.writeHead(pres.statusCode);

      // wait for data
      pres.on('data', chunk => {
        res.write(chunk);
      });

      pres.on('close', () => {
        // closed, let's end client request as well
        res.end();
      });

      pres.on('end', () => {
        // finished, let's finish client request as well
        res.end();
      });
    })
    .on('error', e => {
      // we got an error
      console.log(e.message);
      try {
        // attempt to set error message and http status
        res.writeHead(500);
        res.write(e.message);
      } catch (e) {
        // ignore
      }
      res.end();
  });

  creq.end();
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})