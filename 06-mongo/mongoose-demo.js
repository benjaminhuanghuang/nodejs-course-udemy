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
        validate(value){
          if(value < 0)
          {
            throw new Error('Age must be a postive number')
          }
        }
    }
})

const me = new User({
    name: 'Andrew',
    age: 28
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

User.findById(_id).then((user) => {
  console.log(user)
}).catch((e) => {
  console.log(e)
})