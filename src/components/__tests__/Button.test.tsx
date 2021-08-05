import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('renders the component without crashing', () => {
    const { getByText } = render(<Button>Button with label</Button>);

    const buttonLabel = getByText('Button with label');
    expect(buttonLabel).toBeTruthy();
  });

  it('fires the onPress event', () => {
    const handlePress = jest.fn();

    const { getByText } = render(
      <Button onPress={handlePress}>Clickable button</Button>
    );

    const button = getByText('Clickable button');
    fireEvent.press(button);

    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
