const { Verifier } = require('@pact-foundation/pact');

describe('Service Pact Verification', () => {
  it('should validate the expectations of our consumer', () =>

    new Verifier({
        provider: 'user-service',
        providerBaseUrl: 'http://localhost:3000',
        pactBrokerUrl: 'http://localhost',
        tags: ['test'],
        pactBrokerUsername: 'pact_user',
        pactBrokerPassword: 'password',
        publishVerificationResult: true,
        providerVersion: '1.0.0',
        logLevel: 'DEBUG'})
        .verifyProvider()
        .then(output => {
            console.log('✅')
            console.log(output);
    })
  );
});
