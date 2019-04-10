const {MongoClient, ObjectID} =  require('mongodb')


const id = new ObjectID()

console.log(id.getTimestamp());
console.log(id.id);
console.log(id.toHexString());