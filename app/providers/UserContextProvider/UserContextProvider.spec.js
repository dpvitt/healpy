import React from 'react';
import { shallow } from 'enzyme';
import { UserContextProvider } from './UserContextProvider';

describe('<UserContextProvider />', () => {
  const render = shallow(
    <UserContextProvider>
      <p>child</p>
    </UserContextProvider>,
  );

  it('should render', () => {
    expect(render).toMatchSnapshot();
  });
});
