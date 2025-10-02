const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      on('task', {
        lighthouse: lighthouse(), // This must return a valid object
        pa11y: pa11y(),
      });
    },
  },
};
