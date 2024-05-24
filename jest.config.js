module.exports = {
  preset: 'jest-playwright-preset',
  testEnvironment: 'jest-playwright-preset/lib/PlaywrightEnvironment',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testTimeout: 30000, // Increased timeout for CI environment
};
