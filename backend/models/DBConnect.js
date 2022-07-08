const mongoose = require('mongoose')

const ConnectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI, {
          useUnifiedTopology: true,
          useNewUrlParser: true
      });
  } catch (error) {
    console.log(error);
  }
}

mongoose.connection.once('open', () => {
    console.log('DB Connected');
})

module.exports = ConnectDB;