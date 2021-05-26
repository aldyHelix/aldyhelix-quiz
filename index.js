'use strict';

const bootstap = require('./src/config/bootstrap');
const createServer =  require('./src/server/server');

//start the server
const start = async () => {
	try {
		await bootstap.init();

		const server =  await createServer();
		await server.start();

		console.log('Server running at: ', server.info.uri);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
