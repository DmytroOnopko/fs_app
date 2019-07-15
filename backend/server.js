const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const db = mongoose.connection;

const { PORT, dbRoute } = require('./dbConfig/config');

const getPost = require('./routes/post/getPost');
const addUser = require('./routes/user/addUser');

const app = express();

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/', getPost);
app.use('/api', addUser);

mongoose.connect(dbRoute, { useNewUrlParser: true });
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
