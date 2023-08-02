require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const cors = require('cors');
app.use(cors());
app.options('*', cors());


const db_url = process.env.DATABASE_URL;

mongoose.connect(db_url)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to DB"))
//To let server accept json
app.use(express.json())

const transactionRouter = require('./routes/transactions')
app.use('/transaction', transactionRouter)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.listen(4000, () => console.log("Server Started"))