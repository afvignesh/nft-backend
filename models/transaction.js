const mongoose = require('mongoose')

// Models to our transaction DB
const transacionSchema = new mongoose.Schema({
  hashId : {
    type: String,
    required: true,
  },
  userId : {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  transactionDetails: {
    type: Object,
    required: false,
    default: {}
  }
})

module.exports = mongoose.model('Transaction', transacionSchema)