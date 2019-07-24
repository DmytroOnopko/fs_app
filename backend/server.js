const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const db = mongoose.connection;
const path = require('path');

const { PORT, dbRoute } = require('./dbConfig/config');

const getPost = require('./routes/post/getPost');
const addUser = require('./routes/user/addUser');
const getUser = require('./routes/user/getUser');
const checkUser = require('./routes/user/checkUser');


const app = express();
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/profile/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/', getPost);
app.use('/', getUser);
app.use('/', checkUser);
app.use('/api', addUser);

mongoose.connect(dbRoute, { useNewUrlParser: true });
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
