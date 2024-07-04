const router = require("express").Router();

const routes = [
  {
    path: "/auth",
    route: require("./AuthRoute")
  }
];

routes.forEach((cur) => {
  router.use(cur.path, cur.route);
});


module.exports = router