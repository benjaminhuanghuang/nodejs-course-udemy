const {MongoClient, ObjectID} =  require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  console.log('Connected to mongdb ');

  const db = client.db(databaseName)

  // Insert one
  db.collection('users').insertOne({
    name: 'Andrew',
    age: 27
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user');
    }
    console.log(result.ops);
  });

  // Insert many
  db.collection('users').insertMany([{
    name: 'Andrew',
    age: 27
  },
  {
    name: 'Ben',
    age: 44
  }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert user');
    }
    console.log(result.ops);
  });
})