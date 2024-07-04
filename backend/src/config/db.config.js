const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../constant");

exports.ConnectDB = async () => {
  try {
    await mongoose.connect(PUBLIC_DATA.mongo_db).then(() => {
      console.log(`The app is connected with ${mongoose.connection.host}`),
        (err) => console.log(`Error = ${err}`);
    });
  } catch (error) {
    console.log(`Error part : ${error}`);
    mongoose.disconnect();
    process.exit(1);
  }
};
