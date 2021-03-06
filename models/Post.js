const mongoose = require('mongoose')
const { default: postcss } = require('postcss')

const postSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [50, 'Title cannot be more than 50 characters']
    },
    body: {
        type: String,
        required: [true, 'Please add body'],
        trim: true
    },
    private: {
        type: String,
        required: [true]
    }

},
    {
        timestamps: true,
    }

)

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);