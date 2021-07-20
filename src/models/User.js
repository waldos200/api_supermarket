const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    birth_date: {
      Date,
      is_active: {
        type: Boolean,
        default: false,
      },
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
  },
  { collection: "users", timestamps: true }
);

UserSchema.pre("save", (next) => {
  let user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model("users", UserSchema);

module.exports = { User };
