import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import BackButton from '../BackButton';

describe('BackButton', () => {
  it('fires the onBack event', () => {
    const handleBack = jest.fn();

    const { getByA11yRole } = render(<BackButton goBack={handleBack} />);
    const backButton = getByA11yRole('button');
    fireEvent.press(backButton);

    expect(handleBack).toHaveBeenCalledTimes(1);
  });
});
