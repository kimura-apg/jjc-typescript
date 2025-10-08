import http from "http";

const server = http.createServer((request, response) => {
  if (request.url === "/redirect") {
    response.writeHead(301, {
      location: "https://google.com",
    });
    response.end();
    return;
  }

  if (request.url === "/access_data") {
    console.log(request);

    response.end();
    return;
  }

  response.writeHead(200, {
    "content-type": "text/plain",
  });

  response.end("Hello, World!!!");
});

server.listen(3000, () => {
  console.log("サーバー起動");
});
