const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  console.log('Connected to mongdb ');

  const db = client.db(databaseName)

  // Update one
  const updatePromise = db.collection('users').updateOne({ _id: new ObjectID('5cabd68d2ffe163629b2d137') },
    {
      $set: {
        name: 'Mike'
      }
    });

  updatePromise.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })

  // Update many
  db.collection('users').updateMany({ name: 'Ben' },
    {
      $set: {
        name: 'Mike'
      }
    }).then((result) => {
      console.log(result.modifiedCount);
    }).catch((error) => {
      console.log(error);
    })
})