const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('mongoose-morgan');

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.json());
app.use(cors())

const DB_USER=process.env.DB_USER
const DB_PASSWORD= encodeURIComponent(process.env.DB_PASSWORD)

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.4nard0a.mongodb.net/?retryWrites=true&w=majority`
)
.then(() =>{
    console.log('conectamos ao mongoBD')
    app.listen(3003)
})
.catch((err) => console.log(err))

app.use(morgan({
  collection: 'request-logs',
  connectionString: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.4nard0a.mongodb.net/?retryWrites=true&w=majority`
 },
 {
  skip: function (req, res) {
      return res.statusCode < 400;
  }
 },
 'combined'
));

module.exports = app;
