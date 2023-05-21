const http = require("http");

const servers = http.createServer((req, res) => {
  //   console.log(req);

  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("About us");
  }
  //  res.write("Welcome to home page");
  res.end();
  <h1>OOPs!</h1>;
});
// req is for incoming request
//res = reposne what should be sent back

servers.listen(5000);
// const { url } = require("inspector");
