'use strict';

const Boom = require('@hapi/boom');
const ListUsers = require('./services/ListUsers');
const CreateUser = require('./services/CreateUser');
const GetUser = require('./services/GetUser');
const DeleteUser = require('./services/DeleteUser');

module.exports = {

  async createUser(request) {

    // Context
    const userServiceLocator = request.server.app.userServiceLocator;

    // Input
    const { firstName, lastName, email, password } = request.payload;

    // Treatment
    const user = await CreateUser(firstName, lastName, email, password, userServiceLocator);

    // Output
    return userServiceLocator.userSerializer.serialize(user);
  },

  async findUsers(request) {

    // Context
    const userServiceLocator = request.server.app.userServiceLocator;

    // Treatment
    const users = await ListUsers(userServiceLocator);

    // Output
    return users.map(userServiceLocator.userSerializer.serialize)
  },

  async getUser(request) {

    // Context
    const userServiceLocator = request.server.app.userServiceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    const user = await GetUser(userId, userServiceLocator);

    // Output
    if (!user) {
      return Boom.notFound();
    }
    return userServiceLocator.userSerializer.serialize(user);
  },

  async deleteUser(request, h) {

    // Context
    const userServiceLocator = request.server.app.userServiceLocator;

    // Input
    const userId = request.params.id;

    // Treatment
    await DeleteUser(userId, userServiceLocator);

    // Output
    return h.response().code(204);
  },

};
