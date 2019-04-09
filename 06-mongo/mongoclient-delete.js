const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  console.log('Connected to mongdb ');

  const db = client.db(databaseName)

  // Delete one
  db.collection('users').deleteOne({ name: 'Ben' })
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

  // Delete many
  db.collection('users').deleteMany({ name: 'Ben' })
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
});