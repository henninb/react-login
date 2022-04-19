const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {

  app.use(
    "/feed/json/nhl-2021/minnesota-wild",
    createProxyMiddleware({
      target:
        "https://fixturedownload.com",
      // secure: true,
      // loglevel: 'debug',
      headers: {
        accept: "application/json",
        method: "GET",
      },
      changeOrigin: true,
      // router: {
      //   "/api/admin": "https://culture.seocho.go.kr:3000",
      // },
    })
  );

  app.use(
    "/feed/json/nba-2021/minnesota-timberwolves",
    createProxyMiddleware({
      target:
        "https://fixturedownload.com",
      // secure: true,
      // loglevel: 'debug',
      headers: {
        accept: "application/json",
        method: "GET",
      },
      changeOrigin: true,
      // router: {
      //   "/api/admin": "https://culture.seocho.go.kr:3000",
      // },
    })
  );
  // app.use(
  //   "/api_coin",
  //   createProxyMiddleware({
  //     target:
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false",
  //     headers: {
  //       accept: "application/json",
  //       method: "GET",
  //     },
  //     changeOrigin: true,
  //   })
  // );

  //app.listen(3001);
};
