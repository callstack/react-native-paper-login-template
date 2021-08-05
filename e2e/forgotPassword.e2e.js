/* global element device by */
describe('Forgot Password Feature', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('Forgot Password happy path', async () => {
    await element(by.id('login-button')).tap();
    await element(by.id('forgot-password-link')).tap();
    await element(by.id('forgot-password-screen-login-input')).typeText(
      'user@callstack.com'
    );
    await element(by.id('reset-password-button')).tap();

    expect(element(by.id('login-screen-login-button'))).toBeVisible();
  });

  test('Forgot Password unhappy path', async () => {
    await element(by.id('login-button')).tap();
    await element(by.id('forgot-password-link')).tap();
    await element(by.id('forgot-password-screen-login-input')).typeText(
      'user#callstack.com' // note the # instead of @ in email
    );
    await element(by.id('reset-password-button')).tap();

    expect(element(by.id('reset-password-button'))).toBeVisible();
    expect(element(by.id('validation-error'))).toBeVisible();
  });
});
