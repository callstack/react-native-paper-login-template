/* global element device by */
describe('Sign Up Feature', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('Sign Up happy path', async () => {
    await element(by.id('sign-up-button')).tap();
    await element(by.id('name-input')).typeText('John Doe');
    await element(by.id('login-input')).typeText('user@callstack.com');
    await element(by.id('password-input')).typeText('somepassword');
    await element(by.id('register-screen-sign-up-button')).tap();

    expect(element(by.id('home-button'))).toBeVisible();
  });

  test('Sign Up unhappy path', async () => {
    await element(by.id('sign-up-button')).tap();

    await element(by.id('name-input')).typeText('John Doe');
    // note the # instead of @ in login
    await element(by.id('login-input')).typeText('user#callstack.com');
    await element(by.id('password-input')).typeText('somepassword');
    await element(by.id('register-screen-sign-up-button')).tap();

    await expect(
      element(by.id('register-screen-sign-up-button'))
    ).toBeVisible();
    expect(element(by.id('validation-error'))).toBeVisible();
  });
});
