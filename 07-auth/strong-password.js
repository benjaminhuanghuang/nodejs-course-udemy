const bcrypt = require('bcryptjs')

const myFunction = async ()=>{
  const password = 'abc123';
  const hashedPassword = await bcrypt.hash(password, 8);

  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log(isMatch);
}