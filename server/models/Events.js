const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  time: String, // Optional, HH:MM
  location: String,
}, { timestamps: true });

module.exports = mongoose.model('Event',eventSchema)