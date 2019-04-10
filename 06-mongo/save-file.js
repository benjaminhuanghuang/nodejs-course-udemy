const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // Image
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema)

module.exports = User