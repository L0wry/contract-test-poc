const pact = require('@pact-foundation/pact-node');
const path = require('path');


pact.publishPacts({
    pactFilesOrDirs: [
      path.resolve(__dirname, './pacts/'),
    ],
    pactBroker: 'http://localhost',
    pactBrokerUsername: 'pact_user',
    pactBrokerPassword: 'password',
    tags: ['test'],
    consumerVersion: '1.0.0'
  }).then(() => {
    console.log(`Pact contract successfully published`);
  }).catch(err => {
    console.log('Pact contract error: ', err);
  });
