var express = require('express');
var router = express.Router();
const GeneralExpenseInputRecord = require('../models/GeneralExpenseInputRecord')

router.post('/createNewGeneralExpenseInputRecord', function (req, res, next) {
    try {
        let newRecord = GeneralExpenseInputRecord(
            {
                date: req.body.date,
                serviceProvideType: req.body.serviceProvideType,
                serviceProviderName: req.body.serviceProviderName,
                paymentType: req.body.paymentType,
                expense: req.body.expense,
                items: req.body.items
            }
        )
        newRecord.save()
        res.status(200).send({ isRecordCreated: true });
    } catch (error) {
        res.status(400).send({ isRecordCreated: false })
    }
});

module.exports = router;
