import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { LogoutButton } from '../LogoutButton';

describe('LogoutButton', () => {
  let wrapper;
  const mockStore = configureStore();
  const store = mockStore({});
  const logoutUser = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LogoutButton store={store} logoutUser={logoutUser} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should execute logout on click', () => {
    wrapper.find('div').simulate('click');
    expect(logoutUser).toHaveBeenCalledTimes(1);
  });
});
