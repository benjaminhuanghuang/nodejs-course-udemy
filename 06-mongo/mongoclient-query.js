const {MongoClient, ObjectID} =  require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  console.log('Connected to mongdb ');

  const db = client.db(databaseName)

  // Query and get the first one
  db.collection('users').findOne({name:'Ben', age:44}, (error, user)=>{
    if(error){
      return console.log('Unable to fetch');
    }
    console.log(user);
  })

  // Query by id
  db.collection('users').findOne({_id: new ObjectID('5cabd68d2ffe163629b2d138')}, (error, user)=>{
    if(error){
      return console.log('Unable to fetch');
    }
    console.log(user);
  })

  // Multi result
  db.collection('users').find({age:27}).toArray((error, users)=>{
    if(error){
      return console.log('Unable to fetch');
    }
    console.log(users);
  })

  // Count
  db.collection('users').find({age:27}).count((error, count)=>{
    if(error){
      return console.log('Unable to fetch');
    }
    console.log(count);
  })
})