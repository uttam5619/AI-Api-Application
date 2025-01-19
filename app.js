const express = require('express');
const appRouter = require('./src/routes/app.route')

const app = express();

app.use('/',appRouter);

module.exports = app