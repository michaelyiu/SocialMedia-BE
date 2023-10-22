import mongoose from 'mongoose';

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create a User model using the schema
const User = mongoose.model('User', userSchema);

export default User;