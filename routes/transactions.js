
const express = require('express')
const Transaction = require("../models/transaction")
const router = express.Router()


// Route to save the transacion data to DB
router.get('/:userId', async (req, res, next) => {
    let transaction
    try {
        transaction = await Transaction.find({userId: req.params.userId})
        if (transaction == null){
            return res.status(404).json({'error_msg': "cannot find userid"})
        }
    } catch (err) {
        res.status(400).json({'error_msg': err.message})
    }

    res.json(transaction)
})

// To get all the transactions done by a user
router.post('/', async (req, res) => {
    const transaction = new Transaction({
        hashId: req.body.hashId,
        userId: req.body.userId,
        transactionDetails: req.body
    })
    try{
        const newTransaction = await transaction.save()
        res.status(201).json(newTransaction)
    } catch (err) {
        res.status(400).json({'error_msg': err.message})
    }
})


module.exports = router