/* global element device by */
describe('React Native Paper Login Template app', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('Application Launch', async () => {
    await expect(element(by.text('Login Template'))).toBeVisible();
  });

  test('Navigation between screens', async () => {
    await element(by.id('login-button')).tap();
    await element(by.id('forgot-password-link')).tap();
    await element(by.id('login-link')).tap();
    await element(by.id('sign-up-link')).tap();
    await element(by.id('login-link')).tap();

    await expect(element(by.id('login-screen-login-button'))).toBeVisible();
  });
});
