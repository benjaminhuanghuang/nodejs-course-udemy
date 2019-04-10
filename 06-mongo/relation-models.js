const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    // task to user 1: 1
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})


const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      trim: true
  }})

// user -> tasks  1: N 
userSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
})

const User = mongoose.model('User', userSchema)

module.exports = {User, Task};