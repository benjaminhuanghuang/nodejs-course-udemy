const {Task, User} = require('./relation-models');

const main = async ()=>{
  const task = await Task.findById('12345678');
  await task.populate('ower').execPopulate();
  console.log(task.ower);


  const user = await User.findById('12345678');
  await user.populate('tasks').execPopulate();
  console.log(user.task);
}

main()