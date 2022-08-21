const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT //removed || 5000 due to redundancy, port changed to 3000 as 5000 is already in use

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database has been connected.");
  })
  
  const exercisesRouter = require('./routes/exercises');
  const usersRouter = require('./routes/users');
  
  app.use('/exercises', exercisesRouter);
  app.use('/users', usersRouter);
  
  app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
  });
