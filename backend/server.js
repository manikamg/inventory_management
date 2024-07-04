require("dotenv").config();
const { PUBLIC_DATA } = require("./src/constant");
const app = require("./src/app");
const { ConnectDB } = require("./src/config/db.config");
ConnectDB();

app.listen(PUBLIC_DATA.port, () => {
  console.log(`app is running on port ${PUBLIC_DATA.port}`);
});
