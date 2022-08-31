# tnw-modal-library

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/tnw-modal-library.svg)](https://www.npmjs.com/package/tnw-modal-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tnw-modal-library --force
```

## Usage

```js
import React from 'react';
import { Modal, useModal } from 'tnw-modal-library';
import 'tnw-modal-library/dist/index.css';

const containerStyle = {
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const toggleButtonStyle = {
  backgroundColor: 'turquoise',
  cursor: 'pointer',
  padding: '1rem 2rem',
  textTransform: 'uppercase',
  border: 'none'
};

const App = () => {
  const { isShowing, toggle } = useModal();
  const title = 'Title';
  const message = 'Show modal!';
  return (
    <div style={containerStyle}>
      <h1>My own React Modal</h1>
      <button style={toggleButtonStyle} onClick={toggle}>
        Toggle Modal
      </button>
      <Modal
        isShowing={isShowing}
        close={toggle}
        title={title}
        message={message}
      />
    </div>
  );
};

export default App;
```

## License

© [thucnhi-wiedenhofer](https://github.com/thucnhi-wiedenhofer)
