import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import RegisterButton from './RegisterButton';

test('RegisterButton Link matches snapshot', () => {
  const component = renderer.create(
    <StaticRouter location='/' context={{}}>
      <RegisterButton />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
