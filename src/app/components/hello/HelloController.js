'use strict';

const SayHello = require('./services/HelloServices');

module.exports = {

  sayHelloWorld() {

    return SayHello();
  },

  sayHelloPerson(request) {

    return SayHello(request.params.name);
  },

};