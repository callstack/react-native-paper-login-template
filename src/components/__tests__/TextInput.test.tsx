import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import TextInput from '../TextInput';

describe('TextInput', () => {
  it('renders the component without crashing', () => {
    const rendered = renderer.create(<TextInput label="Email" />).toJSON();

    expect(rendered).toBeTruthy();
  });

  it('renders the error if passed as prop', () => {
    const { getByText } = render(
      <TextInput label="Email" errorText="An error occured" />
    );

    const errorText = getByText('An error occured');

    expect(errorText).toBeTruthy();
  });

  it('does not render an error if the prop is missing', () => {
    const { queryByText } = render(<TextInput label="Email" />);

    const errorText = queryByText('An error occured');

    expect(errorText).toBeNull();
  });
});
