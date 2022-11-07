const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 6000,
  scrollBehavior: "center",
  screenshotOnRunFailure: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Alin Test Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://kerv.com/careers-at-kerv/job-opportunities/',
    experimentalSessionAndOrigin: true
  },
});
