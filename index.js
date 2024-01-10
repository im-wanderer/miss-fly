const http = require("https");

const cookies = [
  {
    Cookie:
      "ASP.NET_SessionId=x0zmsgucjdegassantztcbet; SVR=svr3; _sessionnet4=x0zmsgucjdegassantztcbet; jXt17L2CndBMMbxFSLr7708a9231dfb566=EAAAAGEsHFlqeMPsZH5EfuucJKNBojCHKCdYh5m6KstptY/SUUCT9TB4sTn5SUNlT+Fjt/Xw5RkABN126zuWUUnvWvc9K9aKTZTJce/CKaUAdSbo3WjqyAH2rZrBbB8v1zHG09ET5X9/7qhDYNLu3bZj+Hgo1xO5MBOwgFdVaFlH6F17wxWrWb2QdoF4UAWMHkErQjP9ZeztwicfLCkx+YbHe4TUlZPzdBfmKIO8QbTDeAvss2vNsmuEmlKo4WUQE3XitcGwL6AQdwQjY5Cb8V/w68vZ8OZRXnkDYi/EoBIAbThj",
  },
  {
    Cookie:
      "ASP.NET_SessionId=x0zmsgucjdegassantztcbet; SVR=svr3; jXt17L2CndBMMbxFSLr7708a9231dfb566=EAAAAEfaV/QFNIu2d845dOUZgolOJwxgb60Yb2Z6tibRyHlixr7rE3ak1WLLrO7n9L+YvA9ZMldO31vRYpNRstbgnngLU1DBeqPgApWzSepS2DUbqONG8qsUJiDatWwbjyy+wyxwqq12uQQHY5Hu1i+HGc3NQ4pmTGdcMt1A1vIr68cOyjSsw++zMucegJ1xaQe3dE80MQ2P1lmNdV5TwSGGFnuhbn9X2FbdUTI24f2KTzDjh2sEQAbAQqhW3ZJpCrA4ZvMoQQQetHQLcD6n1M5zrd8pX++BlHfkOtENLRgOQbKDswRU9HTVNBTR3kzxIPpioVXEAzltDdGio9e+OQTdRQOe8VwKsK51wEfeA3t6mwcdmFiDisNUk5gmj60ajdGIbQ==",
  },
  {
    Cookie:
      "ASP.NET_SessionId=x0zmsgucjdegassantztcbet; SVR=svr3; jXt17L2CndBMMbxFSLr7708a9231dfb566=EAAAAB4DkO9Hfi+Bn91WN8pjuJCw8YAK8LEXR7zMIlO/mgGyIibxxBvO/tKG2sam5YjaXgy0eXHT4suXZvfWEUTPbX5cChIgsnyYgADNxbSwMynTw+Ef5qevsra8sfj+q9n7fT/fnCvW3lYUwEzmp+J3E9opQndd3or7iJPSPtEyUN0ODW6K+XtV732IIe0dZgjugqd9D1kktFHlzZIs7dNKScFkJrsQTdfPuL+F3bMM8CEndWkRAGTp6gOw5XI7hKHrkPknc2J+cRGA0az9QF1ENeNMTAQ8Hi3Ws8mEudIRsXGTjsuX2WoWVlzeSi3KinhKiOiD2ncZlP2gO/UGo13M1MbtA9US6ZsBZ8xhShlAg0oJ6o3Q8HK5UpOkut7KnI34ZA==",
  },
];

const getOptions = (cookie) => ({
  method: "GET",
  hostname: "api.wechoice.vn",
  port: null,
  path: "/Handler/SetVote.aspx?award=7&id=136&type=1",
  headers: {
    ...cookie,
    Referer: "https://wechoice.vn/",
    "Content-Length": "0",
  },
});

const voting = () => {
  for (const cookie of cookies) {
    const options = getOptions(cookie);
    const req = http.request(options, function (res) {
      const chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.end();
  }
};

voting();

setInterval(() => {
  voting();
}, 3605 * 1000);
