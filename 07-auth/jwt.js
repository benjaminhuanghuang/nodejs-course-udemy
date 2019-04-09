const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

const decoded = jwt.verify(token, 'thisismynewcourse')

const user = await User.findOne({ _id: decoded._id})
