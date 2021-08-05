import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterScreen from '../RegisterScreen';

describe('RegisterScreen', () => {
  let navigation;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
  });

  it('fires navigate() if name, email and password are valid', () => {
    const { getByLabelText, getByText } = render(
      <RegisterScreen {...{ navigation }} />
    );

    const nameInput = getByLabelText('Name');
    fireEvent.changeText(nameInput, 'Developer');

    const emailInput = getByLabelText('Email');
    fireEvent.changeText(emailInput, 'email@callstack.com');

    const passwordInput = getByLabelText('Password');
    fireEvent.changeText(passwordInput, 'somepassword');

    const signUpButton = getByText(/sign up/i);
    fireEvent.press(signUpButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });

  it('does not fire navigate() if name is missing', () => {
    const { getByLabelText, getByText } = render(
      <RegisterScreen {...{ navigation }} />
    );

    const emailInput = getByLabelText('Email');
    fireEvent.changeText(emailInput, 'email@callstack.com');

    const passwordInput = getByLabelText('Password');
    fireEvent.changeText(passwordInput, 'somepassword');

    const signUpButton = getByText(/sign up/i);
    fireEvent.press(signUpButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(0);
  });

  it('does not fire navigate() if password is missing', () => {
    const { getByLabelText, getByText } = render(
      <RegisterScreen {...{ navigation }} />
    );

    const nameInput = getByLabelText('Name');
    fireEvent.changeText(nameInput, 'Developer');

    const emailInput = getByLabelText('Email');
    fireEvent.changeText(emailInput, 'email@callstack.com');

    const signUpButton = getByText(/sign up/i);
    fireEvent.press(signUpButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(0);
  });

  it('does not fire navigate() if email is missing', () => {
    const { getByLabelText, getByText } = render(
      <RegisterScreen {...{ navigation }} />
    );

    const nameInput = getByLabelText('Name');
    fireEvent.changeText(nameInput, 'Developer');

    const passwordInput = getByLabelText('Password');
    fireEvent.changeText(passwordInput, 'somepassword');

    const signUpButton = getByText(/sign up/i);
    fireEvent.press(signUpButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(0);
  });

  it('does not fire navigate() if email is wrong', () => {
    const { getByLabelText, getByText } = render(
      <RegisterScreen {...{ navigation }} />
    );

    const nameInput = getByLabelText('Name');
    fireEvent.changeText(nameInput, 'Developer');

    const emailInput = getByLabelText('Email');
    fireEvent.changeText(emailInput, 'wrongEmail#gmail.com');

    const passwordInput = getByLabelText('Password');
    fireEvent.changeText(passwordInput, 'somepassword');

    const signUpButton = getByText(/sign up/i);
    fireEvent.press(signUpButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(0);
  });
});
