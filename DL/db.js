const mongoose = require('mongoose'),
  userName = 'kloiz',
  pass = 'Kloiz1234',
  connectionString = `mongodb+srv://${userName}:${pass}@cluster0.ho2ly.mongodb.net/pollsDB?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('mongo connected successfuly!');
  })
  .catch((err) => {
    console.log(err);
    throw 'mongo not connected';
  });
