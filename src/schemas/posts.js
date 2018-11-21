const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    post_date: {
        type: TimeRanges,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    photo: {
        type: ImageBitmap
    },
    user_name: {
        type: String,
        required: true
    }
},{ collection: 'posts', timestamps: true });


module.exports = mongoose.model('posts', PostSchema, 'posts');
