const { chromium } = require('playwright');

describe('Expo React Native Web App', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the home page', async () => {
    console.log('Navigating to page...');
    await page.goto('http://localhost:8081'); // Make sure your Expo app is running on this port
    console.log('Page loaded. Checking content...');
    const content = await page.textContent('[data-testid="supertitle"]');
    console.log('Content checked.');
    expect(content).toBe('Welcome!'); // Adjust the selector and expected text as per your app
  },90000);
});
