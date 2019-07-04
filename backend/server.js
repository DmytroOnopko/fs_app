const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const db = mongoose.connection;

const { PORT, dbRoute } = require('./dbConfig/config');

// const getData = require('./routes/getData');
// const deleteData = require('./routes/deleteData');
// const updateData = require('./routes/updateData');
// const putData = require('./routes/putData');
const getPost = require('./routes/post/getPost');
const getUser = require('./routes/user/getUser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// app.use('/api', getData);
// app.use('/api', updateData);
// app.use('/api', deleteData);
// app.use('/api', putData);
app.use('/', getPost);
app.use('/', getUser);

mongoose.connect(dbRoute, { useNewUrlParser: true });
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
