exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.js'
  ],
  capabilities: {
    'browserName': 'firefox'
  },
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine'
};
