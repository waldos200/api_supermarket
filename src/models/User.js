const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true, 
    index: { unique: true } 
  },
  birth_date: Date,
  is_active: {
    type: Boolean, 
    default: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  }
}, {collection: 'users', timestamps: true});

UserSchema.pre('save', function (next) {
  let user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt( SALT_FACTOR, function(err, salt) {
    if(err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model('users', UserSchema);

module.exports = { User };