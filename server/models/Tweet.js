import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    media: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    retweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});
const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;