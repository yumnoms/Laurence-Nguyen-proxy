const server = require('./server.js');

const port = 3050;
server.listen(port, () => {
  console.log(`Proxy server up and running! Listening on port ${port}...`);
  console.log(`http://localhost:${port}`);
});
