import http from "http";

const server = http.createServer((repuest, response) => {
  // 別のサーバーへリダイレクト
  if (repuest.url === "redirect") {
    response.writeHead(301, {
      location: "https://google.com",
    });
    response.end();
    return;
  }

  response.writeHead(200, {
    "content-type": "text/plain",
  });

  response.end("Hello World!!");
});

server.listen(3000, () => {
  console.log("サーバー起動");
});

// http://google.com 80port
// https://google.com 443port
