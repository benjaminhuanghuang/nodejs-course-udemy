const Task = require('./task')

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      trim: true
  }
})

userSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
})

// Delete user tasks when user is removed
userSchema.pre('remove', async function (next) {
  const user = this
  await Task.deleteMany({ owner: user._id })
  next()
})
