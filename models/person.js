const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// Define person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String
  },
  salary: {
    type: Number,
    required: true
  },
  username: {
    required: true,
    type: String,
    unique: true // Added unique constraint for username
  },
  password: {
    required: true,
    type: String
  }
});

// Pre-save hook to hash the password before saving
personSchema.pre('save', async function(next) {
  const person = this;

  // Hash the password only if it has been modified (or is new)
  if (!person.isModified('password')) return next();

  try {
    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(person.password, salt);

    // Override the plain password with the hashed one
    person.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

// Method to compare provided password with the hashed password
personSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    // Use bcrypt to compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

// Create person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
