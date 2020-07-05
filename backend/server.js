const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://evon:<password>@cluster0-qjjki.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});


// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully!!");
// })

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is runningg on port ${port}`);
});

// process.on('SIGINT', function() {
//     mongoose.connection.close(function () {
//       console.log('Mongoose disconnected on app termination');
//       process.exit(0);
//     });
//   });


