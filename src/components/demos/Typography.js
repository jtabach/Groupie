import React, { Component } from 'react';

import Button from '../common/Button';

export default class Typography extends Component {
  render() {
    return (
      <div>
        <h1>This is an h1</h1>
        <h2>This is an h2</h2>
        <h3>This is an h3</h3>
        <h4>This is an h4</h4>
        <h5>This is an h5</h5>
        <h6>This is an h6</h6>
        <Button
          type="button"
          style="primary"
          size="large"
          label="primary button"
          onClick={() => null}
        />
        <Button
          type="button"
          style="primary-inverse"
          size="large"
          label="primary inverse"
          onClick={() => null}
        />
        <Button
          type="button"
          style="secondary"
          size="large"
          label="secondary button"
          onClick={() => null}
        />
        <Button
          type="button"
          style="secondary-inverse"
          size="large"
          label="secondary inverse"
          onClick={() => null}
        />
        <Button
          type="button"
          style="outline"
          size="large"
          label="outline button"
          onClick={() => null}
        />
        <Button
          type="button"
          style="green"
          size="large"
          label="green button"
          onClick={() => null}
        />
        <Button
          type="button"
          style="green-inverse"
          size="large"
          label="green inverse"
          onClick={() => null}
        />
      </div>
    );
  }
}
