import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import LoginButton from '../LoginButton';

test('LoginButton Link matches snapshot', () => {
  const component = renderer.create(
    <StaticRouter location='/' context={{}}>
      <LoginButton />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
