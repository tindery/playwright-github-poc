const { devices } = require('playwright');

module.exports = async () => {
  // Example setup for an iPhone 11 emulation
  await page.emulate(devices['iPhone 11']);
};
