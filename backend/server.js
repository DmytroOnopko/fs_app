const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const db = mongoose.connection;
const path = require('path');
const cookieParser = require('cookie-parser');

const checkAuth = require('./middlewares/checkAuth.ware');

const {PORT, dbRoute} = require('./dbConfig/dbConfig.config');

const api = require('./routes/api/index');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(cookieParser());
app.use(logger('dev'));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/profile/public', express.static(path.join(__dirname, 'public')));

app.use(checkAuth);

app.use('/api', api);

mongoose.connect(dbRoute, {useNewUrlParser: true});
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
