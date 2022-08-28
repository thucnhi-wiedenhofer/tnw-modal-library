# tnw-modal-library

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/tnw-modal-library.svg)](https://www.npmjs.com/package/tnw-modal-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tnw-modal-library
```

## Usage

```jsx
import React from 'react';
import { Modal, useModal } from 'tnw-modal-library';
import 'tnw-modal-library/dist/index.css';

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className='container'>
      <h1>Example Modale React</h1>
      <button onClick={toggle}>Toggle Modal</button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default App;
```

## License

© [thucnhi-wiedenhofer](https://github.com/thucnhi-wiedenhofer)
