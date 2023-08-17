//Dependencies
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//Initializing a profile schema
const profileSchema = new Schema({
    // changed 'name' to 'username'
    _id: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    previousScore: {
      type: Number,
      default: 0,
    },
});

  //Implementing auto-increment feature for profile id
  profileSchema.plugin(autoIncrement.plugin, {model: 'Profile', field: '_id' });

  //Pre-save middleware to create a password
  profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  //Checking password input with hashed password
  profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const Profile = model('Profile', profileSchema);

module.exports = Profile;