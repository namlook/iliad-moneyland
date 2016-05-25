
import eureka from 'odyssee/src';
import config from './config';

import loadFixtures from './fixtures';

const eurekaServer = eureka(config);

eurekaServer.hooks.beforeStart = (server, next) => {
  server.on('log', (message) => {
    console.log(message.tags, message.data); // eslint-disable-line no-console
  });
  next(null);
};


eurekaServer.start().then((server) => {
  const db = server.plugins.odyssee.database;
  db.clear()
    .then(() => loadFixtures(db))
    .then(() => {
      console.log('fixtures loaded'); // eslint-disable-line no-console
    });

  server.log(
    'info',
    `Server running at: http://${server.info.address}:${server.info.port}`
  );
}).catch((error) => {
    // console.log(error);
    // console.log(error.stack);
  throw error;
});
