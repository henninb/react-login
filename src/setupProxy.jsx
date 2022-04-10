const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/local",
    createProxyMiddleware({
      target: "http://localhost:3080",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/coin",
    createProxyMiddleware({
      target:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      headers: {
        accept: "application/json",
        method: "GET",
      },
      changeOrigin: true,
    })
  );
  app.use(
    "/api/nhl",
    createProxyMiddleware({
      target:
        "https://fixturedownload.com/feed/json/nhl-2021/minnesota-wild",
      headers: {
        accept: "application/json",
        method: "GET",
      },
      changeOrigin: true,
    })
  );

  //app.listen(3001);
};
