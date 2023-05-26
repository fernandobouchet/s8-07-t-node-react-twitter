import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    media: {
        type: String
    },
    author: {
       type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    retweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    hashtags: [{
        type: String
    }],
  
      images: [
        {
          type: String,
        },
      ],
    likes: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
},
    { timestamps: true });


const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;