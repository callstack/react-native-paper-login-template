/* global element device by */
describe('Login feature', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('Login happy path', async () => {
    await element(by.id('login-button')).tap();
    await element(by.id('login-input')).typeText('user@callstack.com');
    await element(by.id('password-input')).typeText('somepassword');
    await element(by.id('login-screen-login-button')).tap();

    expect(element(by.id('home-button'))).toBeVisible();
  });

  test('Login unhappy path', async () => {
    await element(by.id('login-button')).tap();

    // note the # instead of @ in login
    await element(by.id('login-input')).typeText('user#callstack.com');
    await element(by.id('password-input')).typeText('somepassword');
    await element(by.id('login-screen-login-button')).tap();

    await expect(element(by.id('login-screen-login-button'))).toBeVisible();
    expect(element(by.id('validation-error'))).toBeVisible();
  });
});
