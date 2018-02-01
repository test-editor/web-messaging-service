exports.config = {
  allScriptsTimeout: 11000,
  useAllAngular2AppRoots: true,
  specs: [
    './e2e/**/*.e2e-spec.js'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: [ "--no-sandbox" ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine'
};
