const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  listName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  isCheck: {
    type: Boolean,
    require: true,
    default: false
  },
  content: {
    type: String,
    require: false
  }
});

checklistSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Checklist', checklistSchema);