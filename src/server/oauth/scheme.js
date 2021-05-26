'use strict';

const AuthorizationController = require('../../app/security/interfaces/controllers/AuthorizationController');

module.exports = () => {
  return {
    authenticate: AuthorizationController.verifyAccessToken
  };
};