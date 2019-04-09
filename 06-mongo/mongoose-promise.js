const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a postive number')
      }
    }
  }
})

// Promise chaining
User.findOneAndUpdate('', { age: 1 }).then((user) => {
  console.log(user);
  // return next promise
  return User.countDocuments({ age: 1 });
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});

// Using async
const updateAgeAndCount = async (id, age) =>{
  const user = await User.findByIdAndUpdate(id, {age});
  const count = await User.countDocuments({age});
  return count;
}

updateAgeAndCount(' ').then((count)=>{
  console.log(count);
}).catch((e)=>{
  console.log(e);
})