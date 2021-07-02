const mongoose = require('mongoose')

const GeneralExpenseInputRecord = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    serviceProvideType: {
      type: String,
      required: true
    },
    serviceProviderName: {
      type: String,
      required: true
    },
    paymentType: {
      type: String,
      required: true
    },
    expense: {
      type: Number,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
)
module.exports = mongoose.model('GeneralExpense', GeneralExpenseInputRecord)