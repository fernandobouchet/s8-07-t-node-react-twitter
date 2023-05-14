import mongoose from 'mongoose';
import generateJWT from '../helpers/generateJWT.js';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: '' 
  },
  bio: {
    type: String,
    default: ''
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  token: {
    type: String,
    default: generateJWT()
},
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
