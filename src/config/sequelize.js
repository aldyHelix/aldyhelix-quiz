'use strict';

const { Sequelize } = require('sequelize');
const environment = require('./environment');

const sequelize = new Sequelize(environment.database.url);

sequelize.import('../app/components/users/models/UserSequelize');

module.exports = sequelize;