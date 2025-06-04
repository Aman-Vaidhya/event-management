const Events = require('../models/Events');
const { isToday, isFuture, isPast, parseISO } = require('date-fns');


exports.getAllEvents = async (req, res) => {
  try {
    const events = await Events.find().sort({ date: 1 });
    res.json(events); // send flat array, no categorization here
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEvent = async (req, res) => {
  const newEvent = await Events.create(req.body);
  res.status(201).json(newEvent);
};

exports.updateEvent = async (req, res) => {
  const event = await Events.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(event);
};

exports.deleteEvent = async (req, res) => {
  await Events.findByIdAndDelete(req.params.id);
  res.json({ message: 'Event deleted' });
};
