const { Task, User } = require('./relation-models');

const main = async () => {
  const task = await Task.findById('12345678');
  await task.populate('ower').execPopulate();
  console.log(task.ower);


  const user = await User.findById('12345678');
  await user.populate('tasks').execPopulate();

  // population with filter
  const match = {}
  match.completed = req.query.completed === 'true'
  await user.populate({
    path: 'tasks',
    match
  }).execPopulate()
}

main()