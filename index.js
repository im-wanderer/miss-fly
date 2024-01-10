const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api.wechoice.vn",
  "port": null,
  "path": "/Handler/SetVote.aspx?award=7&id=136&type=1",
  "headers": {
    "Cookie": "ASP.NET_SessionId=x0zmsgucjdegassantztcbet; SVR=svr3; jXt17L2CndBMMbxFSLr7708a9231dfb566=EAAAAEfaV/QFNIu2d845dOUZgolOJwxgb60Yb2Z6tibRyHlixr7rE3ak1WLLrO7n9L+YvA9ZMldO31vRYpNRstbgnngLU1DBeqPgApWzSepS2DUbqONG8qsUJiDatWwbjyy+wyxwqq12uQQHY5Hu1i+HGc3NQ4pmTGdcMt1A1vIr68cOyjSsw++zMucegJ1xaQe3dE80MQ2P1lmNdV5TwSGGFnuhbn9X2FbdUTI24f2KTzDjh2sEQAbAQqhW3ZJpCrA4ZvMoQQQetHQLcD6n1M5zrd8pX++BlHfkOtENLRgOQbKDswRU9HTVNBTR3kzxIPpioVXEAzltDdGio9e+OQTdRQOe8VwKsK51wEfeA3t6mwcdmFiDisNUk5gmj60ajdGIbQ==",
    "Referer": "https://wechoice.vn/",
    "Content-Length": "0"
  }
};


const voting = () => {
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
};

voting()

setInterval(() => {
  voting()
}, 3605 * 1000);
