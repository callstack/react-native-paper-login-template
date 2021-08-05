import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';

describe('LoginScreen', () => {
  it('fires navigate() if both email and password are valid', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByLabelText, getByText } = render(
      <LoginScreen {...{ navigation }} />
    );

    const loginInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(loginInput, 'email@callstack.com');
    fireEvent.changeText(passwordInput, 'somepassword');

    fireEvent.press(loginButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });

  it('does not fire navigate() if email is missing', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByLabelText, getByText } = render(
      <LoginScreen {...{ navigation }} />
    );

    const loginInput = getByLabelText('Email');
    const loginButton = getByText('Login');

    fireEvent.changeText(loginInput, 'email@callstack.com');
    fireEvent.press(loginButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(0);
  });

  it('does not fire navigate() if password is missing', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByLabelText, getByText } = render(
      <LoginScreen {...{ navigation }} />
    );

    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(passwordInput, 'somepassword');
    fireEvent.press(loginButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(0);
  });

  it('does not fire navigate() if email is wrong', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByLabelText, getByText } = render(
      <LoginScreen {...{ navigation }} />
    );

    const loginInput = getByLabelText('Email');
    fireEvent.changeText(loginInput, 'wrongEmail#gmail.com');

    const passwordInput = getByLabelText('Password');
    fireEvent.changeText(passwordInput, 'somepassword');

    const loginButton = getByText('Login');
    fireEvent.press(loginButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(0);
  });
});
