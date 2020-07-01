'use strict';

require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const setup = require('./config/setup');

// Express application
const app = express();

// Environment variables
const env = process.env.NODE_ENV || 'development';
const morgan_config = env === 'development' ? 'dev' : 'combined';

// Middleware
// noinspection JSCheckFunctionSignatures
app.use(helmet());
// noinspection JSCheckFunctionSignatures
app.use(morgan(morgan_config));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Services and routes
require('./services/index')(app);
require('./routes/index')(app);

// Call setup function
(async () => await setup())();

module.exports = app;
