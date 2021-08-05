import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ForgotPasswordScreen from '../ForgotPasswordScreen';

describe('ForgotPasswordScreen', () => {
  it('fires navigate() if email is valid', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByLabelText, getByText } = render(
      <ForgotPasswordScreen {...{ navigation }} />
    );

    const loginInput = getByLabelText('E-mail address');
    fireEvent.changeText(loginInput, 'email@callstack.com');

    const resetPasswordButton = getByText(/send reset instructions/i);
    fireEvent.press(resetPasswordButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });

  it('does not fire navigate() if email is missing', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByText } = render(<ForgotPasswordScreen {...{ navigation }} />);

    const resetPasswordButton = getByText(/send reset instructions/i);
    fireEvent.press(resetPasswordButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(0);
  });

  it('does not fire navigate() if email is wrong', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByLabelText, getByText } = render(
      <ForgotPasswordScreen {...{ navigation }} />
    );

    const loginInput = getByLabelText('E-mail address');
    fireEvent.changeText(loginInput, 'wrongEmail#gmail.com');

    const resetPasswordButton = getByText(/send reset instructions/i);
    fireEvent.press(resetPasswordButton);

    expect(navigation.navigate).toHaveBeenCalledTimes(0);
  });
});
