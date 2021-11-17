const mongoose = require("mongoose");

// const dbConnection = async () => {
//   await mongoose.connect(process.env.MONGODB_CNN, {
//     useNewParser: true,
//     useUnifiedTipology: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//   });
// };

const dbConnection = async () => {
  try {
    //MONGODB_CNN
    await mongoose.connect(process.env.URLDB);
    console.log("Base de dades online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de dades");
  }
};

module.exports = {
  dbConnection,
};
